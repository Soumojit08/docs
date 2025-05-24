import React, { useState } from "react";
import { Eye, FileArchiveIcon, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import useAuthStore from "../store/useAuthStore";

import FileChartPie from "../icons/FileChartPie";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(formData);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-zinc-950">
      {/* left side */}

      <AuthImagePattern
        title="Stay Connected"
        subtitle="No need to worry about your data. We are committed to keeping your data safe and secure."
      />

      {/* right side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* LOGO */}
          <div className="text-center mb-4">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-zinc-900 flex items-center justify-center 
              transition-colors"
              >
                <FileChartPie className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back !</h1>
            </div>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  className={`input input-bordered w-full`}
                  placeholder="Johndoe_01"
                  name="userName"
                  onChange={handleChange}
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
                  className={`input input-bordered w-full`}
                  placeholder="••••••••"
                  name="password"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 cursor-pointer right-3 text-gray-300"
                  onClick={handlePassword}
                >
                  {showPassword ? (
                    <Eye className="size-5 " />
                  ) : (
                    <EyeClosed className="size-5 " />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-white text-zinc-900 w-full"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don't have an account?{" "}
              <Link to="/signup" className="link text-white link-hover">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
