import { StatusCodes } from "http-status-codes";
import Models from "../../models/index.model.js";
import cloudinary from "../../utils/cloudinary.js";
import fs from "fs";

const uploadFileController = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { fileName, fileDescription, fileType, fileSize } = req.body;

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User ID is required",
      });
    }

    const user = await Models.UserModel.findById(userId);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User not found",
      });
    }

    if (!req.file) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "No file uploaded",
      });
    }

    let fileUrl = "";
    try {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: "files",
      });
      fs.unlinkSync(req.file.path);
      fileUrl = uploadResponse.secure_url;
    } catch (error) {
      console.log("Error uploading file: ", error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "File upload failed." });
    }

    // Save file metadata to DB
    const fileDoc = await Models.FileModel.create({
      user: user._id,
      fileName: fileName || req.file.originalname,
      fileDescription: fileDescription || "",
      fileType: fileType || req.file.mimetype.split("/")[1],
      fileSize: fileSize || req.file.size,
      fileUrl,
    });

    return res.status(StatusCodes.CREATED).json({
      message: "File uploaded successfully",
      file: fileDoc,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred while uploading the file",
      error: error.message,
    });
  }
};

export default uploadFileController;
