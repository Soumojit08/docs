import { StatusCodes } from "http-status-codes";
import Models from "../../models/index.model.js";

const getFilesController = async (req, res) => {
  try {
    const userId = req.user?._id;

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

    const files = await Models.FileModel.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate("user", "name email");
    if (!files || files.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "No files found for this user",
      });
    }

    return res.status(StatusCodes.OK).json({
      message: "Files retrieved successfully",
      data: files,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred while retrieving files",
      error: error.message,
    });
  }
};

export default getFilesController;
