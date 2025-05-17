import { Link } from "react-router-dom";
import { LogOut, FileArchive, LogIn } from "lucide-react";
import useAuthStore from "../store/useAuthStore";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  return (
    <header
      className="bg-base-100/80 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg "
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileArchive className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Docs</h1>
            </Link>
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center btn btn-error btn-soft shadow-none"
              >
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            ) : (
              <button className="flex items-center btn btn-primary opacity-90 shadow-none hover:opacity-85">
                <LogIn className="size-5" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
