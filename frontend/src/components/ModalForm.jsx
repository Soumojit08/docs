import React, { useState } from "react";

const ModalForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {};

  return (
    <div className="bg-zinc-900/30 backdrop-blur-lg shadow-sm shadow-zinc-800/30 top-1/2 left-1/2 transform -translate-1/2  rounded-2xl absolute h-[75%] w-[35%] p-8">
      <h1 className="text-white text-2xl font-bold">Upload New File</h1>

      <form className="space-y-2 mt-2">
        <div className="form-control">
          <label className="lable">
            <span className="label-text font-medium">File Name</span>
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              className="input input-bordered w-full outline-none focus:outline-none bg-zinc-900 shadow-none"
              autoComplete="off"
              placeholder="Enter File Name"
              name="fileName"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="lable">
            <span className="label-text font-medium">File Description</span>
          </label>
          <div className="relative mt-1">
            <fieldset className="fieldset">
              <textarea
                className="textarea h-24 w-full bg-zinc-900 focus:outline-none shadow-none"
                placeholder="Your File Description Here"
              ></textarea>
              <div className="label">Optional</div>
            </fieldset>
          </div>
        </div>

        <div className="form-control">
          <label className="lable">
            <span className="label-text font-medium">
              Choose Your File Type
            </span>
          </label>
          <div className="relative mt-1">
            <select
              defaultValue="Pick a color"
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
            <span className="label-text font-medium">Profile Pic</span>
          </label>
          <div className="relative">
            <input
              type="file"
              name="file"
              className="file-input w-full focus:outline-none bg-zinc-900 shadow-none"
              onChange={handleChange}
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
    </div>
  );
};

export default ModalForm;
