import { Eye, EyeClosed, FileArchiveIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import { useState } from "react";

import useAuthStore from "../store/useAuthStore";

const SignUpPage = () => {
  const { signup, loading, error } = useAuthStore();
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
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <FileArchiveIcon className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Create Account</h1>
            </div>
          </div>

          <form
            className="space-y-2"
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
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
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
                  className="file-input w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;
