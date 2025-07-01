import signupController from "./auth/signup.controller.js";
import loginController from "./auth/login.controller.js";
import logoutController from "./auth/logout.controller.js";
import getMeController from "./get/getMe.controller.js";
import uploadFileController from "./file/uploadFile.controller.js";
import getFilesController from "./get/getFiles.controller.js";
import getImagesController from "./get/getImages.controller.js";

const controller = {
  signup: signupController,
  login: loginController,
  logout: logoutController,
  getMe: getMeController,
  uploadFile: uploadFileController,
  getFiles: getFilesController,
  getImages: getImagesController,
};

export default controller;
