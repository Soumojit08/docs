import { StatusCodes } from "http-status-codes";
import Models from "../../models/index.model.js";

const getImagesController = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User ID is required" });
    }

    const imageTypes = ["jpg", "jpeg", "png", "gif"];
    const files = await Models.ImageModel.find({
      user: userId,
      fileType: { $in: imageTypes },
    }).sort({ createdAt: -1 });

    const items = files.map((file) => ({
      id: file._id,
      img: file.fileUrl,
      url: file.fileUrl,
      height: 200 + Math.floor(Math.random() * 200), // Default height if not specified
    }));

    return res.status(StatusCodes.OK).json({
      items,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export default getImagesController;
