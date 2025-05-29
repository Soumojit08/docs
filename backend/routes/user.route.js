//Import
import express from "express";
import controller from "../controllers/index.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleware, controller.getMe);

router.post("/files", authMiddleware, )

export default router;
