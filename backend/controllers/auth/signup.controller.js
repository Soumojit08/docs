import { StatusCodes } from "http-status-codes";
import Models from "../../models/index.model.js";
import bcryptjs from "bcryptjs";
import cloudinary from "../../utils/cloudinary.js";
import fs from "fs";
import upload from "../../utils/multer.js";

const signupController = async (req, res) => {
  try {
    const { fullName, userName, email, password } = req.body;

    if (!fullName || !userName || !email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "All fields are required." });
    }

    const existingEmail = await Models.UserModel.findOne({ email });

    if (existingEmail) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Email already in use." });
    }

    const existingUsername = await Models.UserModel.findOne({ userName });

    if (existingUsername) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Username already in use." });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    let profileImageUrl = "";

    if (req.file) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
          folder: "profile_pics",
        });
        fs.unlinkSync(req.file.path);
        profileImageUrl = uploadResponse.secure_url;
      } catch (error) {
        console.log("Error uploading image: ", error);
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: "Image upload failed." });
      }
    }

    const user = await Models.UserModel({
      email,
      userName,
      fullName,
      password: hashedPassword,
      profilePic: profileImageUrl,
    });

    await user.save();

    return res.status(StatusCodes.CREATED).json({
      user,
      message: "User created successfully.",
    });
  } catch (error) {
    console.log("Error in signup controller : ", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred." });
  }
};

export default signupController;
