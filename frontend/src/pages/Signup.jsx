import { Eye, EyeClosed, FileArchiveIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import { useState } from "react";

import useAuthStore from "../store/useAuthStore";

import FileChartPie from "../icons/FileChartPie";

const SignUpPage = () => {
  const { signup } = useAuthStore();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    profilePic: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation for required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.userName ||
      !formData.password
    ) {
      setIsLoading(false);
      return;
    }

    try {
      const form = new FormData();

      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("userName", formData.userName);
      form.append("password", formData.password);

      if (formData.profilePic) {
        form.append("profilePic", formData.profilePic);
      }

      await signup(form);

      console.log("Signup successful");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-zinc-950">
      {/* left side */}
      <div className="flex flex-col justify-center items-center px-6 sm:p-12">
        <div className="w-full max-w-md space-y-4">
          {/* LOGO */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-1 group">
              <div
                className="size-12 rounded-xl bg-zinc-900 flex items-center justify-center 
              transition-colors"
              >
                <FileChartPie className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Create Account</h1>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={handleSignup}
            encType="multipart/form-data"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  className="input input-bordered w-full focus:outline-none bg-zinc-900 shadow-none"
                  placeholder="John Doe"
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full focus:outline-none bg-zinc-900 shadow-none"
                  placeholder="you@example.com"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="userName"
                  className="input input-bordered w-full focus:outline-none bg-zinc-900 shadow-none"
                  placeholder="Johndoe_01"
                  onChange={handleChange}
                  value={formData.userName}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full focus:outline-none bg-zinc-900 shadow-none"
                  placeholder="••••••••"
                  onChange={handleChange}
                  value={formData.password}
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute inset-y-0 cursor-pointer right-3 text-gray-300"
                >
                  {showPassword ? (
                    <Eye className="size-5" />
                  ) : (
                    <EyeClosed className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Profile Pic</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="profilePic"
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
                Sign Up
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

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link text-white link-hover">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="No need to worry about your data. We are committed to keeping your data safe and secure."
      />
    </div>
  );
};

export default SignUpPage;
