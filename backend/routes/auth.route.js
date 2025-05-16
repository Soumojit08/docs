//Import
import express from "express";
import controller from "../controllers/index.controller.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.post("/signup", upload.single("profilePic"), controller.signup);

router.post("/login", controller.login);

export default router;
