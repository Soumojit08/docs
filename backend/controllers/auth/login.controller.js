import { StatusCodes } from "http-status-codes";
import Models from "../../models/index.model.js";
import bcrypt from "bcryptjs";

const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Username and password are required",
    });
  }

  const user = await Models.UserModel.findOne({ username });

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Invalid username or password",
    });
  }

  // Check if the password is correct
  const isPassword = await bcrypt.compare(password, user.password);

  if (!isPassword) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Invalid username or password",
    });
  }
  // Generate a JWT token

  const token = user.generateAuthToken();
  
  return res.status(StatusCodes.OK).json({
    message: "Login successful",
    token,
  });
};

export default loginController;
