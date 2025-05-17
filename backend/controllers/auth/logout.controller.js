import { StatusCodes } from "http-status-codes";

const logoutController = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(StatusCodes.OK).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred during logout",
    });
  }
};

export default logoutController;
