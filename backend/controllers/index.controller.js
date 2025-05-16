import signupController from "./auth/signup.controller.js";
import loginController from "./auth/login.controller.js";

const controller = {
  signup: signupController,
  login: loginController,
};

export default controller;
