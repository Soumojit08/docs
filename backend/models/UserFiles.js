import mongoose, { Schema } from "mongoose";

const userFileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  fileDescription: {
    type: String,
    default: null,
  },
  fileType: {
    type: String,
    enum: ["png", "jpg", "jpeg", "pdf", "docx", "txt", "xlsx", "pptx"],
    required: true,
  },
  fileSize: {
    type: Number,
  },
});

const userFile = mongoose.model("File", userFileSchema);
export default userFile;
