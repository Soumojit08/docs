import signupController from "./auth/signup.controller.js";
import loginController from "./auth/login.controller.js";
import logoutController from "./auth/logout.controller.js";
import getMeController from "./get/getMe.controller.js";

const controller = {
  signup: signupController,
  login: loginController,
  logout: logoutController,
  getMe: getMeController,
};

export default controller;
