//Import
import express from "express";
import controller from "../controllers/index.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../utils/multer.js";


const router = express.Router();

router.get("/me", authMiddleware, controller.getMe);

router.post("/upload-files", authMiddleware, upload.single("file"), controller.uploadFile);

export default router;
