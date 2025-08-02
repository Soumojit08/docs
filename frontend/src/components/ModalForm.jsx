import React, { useState } from "react";
import axiosInstance from "../lib/axios";
import { useCookies } from "react-cookie";

const ModalForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fileName: "",
    file: null,
    fileDescription: "",
    fileType: "Auto Detect",
  });
  const [cookies] = useCookies(["token", "user"]);
  const userId = cookies.user?._id;
  const token = cookies.token;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) return;
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("fileName", formData.fileName);
      data.append("fileDescription", formData.fileDescription);
      data.append(
        "fileType",
        formData.fileType === "Auto Detect" ? "" : formData.fileType
      );
      data.append("file", formData.file);

      // Send token as Authorization header
      await axiosInstance.post("/user/upload-files", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      // Optionally close modal or show success
      if (onClose) onClose();
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900/30 backdrop-blur-lg shadow-sm shadow-zinc-800/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl absolute md:h-[65%] md:w-[35%] p-8 h-[50%] w-[90%] z-50">
      <h1 className="text-white text-2xl font-bold">Upload New File</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mt-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">File Name</span>
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              className="input input-bordered w-full outline-none focus:outline-none bg-zinc-900 shadow-none"
              autoComplete="off"
              placeholder="Enter File Name"
              name="fileName"
              value={formData.fileName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">File Description</span>
          </label>
          <div className="relative mt-1">
            <textarea
              className="textarea h-24 w-full bg-zinc-900 focus:outline-none shadow-none"
              placeholder="Your File Description Here"
              name="fileDescription"
              value={formData.fileDescription}
              onChange={handleChange}
            />
            <div className="label">Optional</div>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              Choose Your File Type
            </span>
          </label>
          <div className="relative mt-1">
            <select
              name="fileType"
              value={formData.fileType}
              onChange={handleChange}
              className="select bg-zinc-900 w-full focus:outline-none shadow-none"
            >
              <option>Auto Detect</option>
              <option>jpg</option>
              <option>png</option>
              <option>pdf</option>
              <option>docx</option>
              <option>xlsx</option>
              <option>pptx</option>
              <option>txt</option>
              <option>zip</option>
              <option>rar</option>
              <option>mp4</option>
              <option>mp3</option>
              <option>avi</option>
              <option>mkv</option>
              <option>other</option>
            </select>
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">File</span>
          </label>
          <div className="relative">
            <input
              type="file"
              name="file"
              className="file-input w-full focus:outline-none bg-zinc-900 shadow-none"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className={`btn w-full relative ${
            isLoading
              ? "bg-white/80 cursor-not-allowed"
              : "bg-white hover:bg-white/90"
          } text-zinc-900 transition-all duration-200`}
          disabled={isLoading}
        >
          <span className={`${isLoading ? "invisible" : "visible"}`}>
            {isLoading ? "Uploading..." : "Upload File"}
          </span>
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-zinc-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          )}
        </button>
      </form>
      {onClose && (
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default ModalForm;
