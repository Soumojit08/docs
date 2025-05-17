import signupController from "./auth/signup.controller.js";
import loginController from "./auth/login.controller.js";
import logoutController from "./auth/logout.controller.js";

const controller = {
  signup: signupController,
  login: loginController,
  logout: logoutController,
};

export default controller;
