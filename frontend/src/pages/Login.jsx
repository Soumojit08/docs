import { Eye, FileArchiveIcon } from "lucide-react";
import { Link } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";

const Login = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />

      {/* right side */}
      <div className="flex flex-col justify-center items-center p-6 mt-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* LOGO */}
          <div className="text-center mb-4">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <FileArchiveIcon className="size-6 text-primary" />
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
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`input input-bordered w-full`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 cursor-pointer right-3 text-gray-300"
                >
                  <Eye className="size-5 " />
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don't have an account?{" "}
              <Link to="/login" className="link link-primary">
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
