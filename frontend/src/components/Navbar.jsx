import { Link, useNavigate } from "react-router-dom";
import { LogOut, FileArchive } from "lucide-react";
import useAuthStore from "../store/useAuthStore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-100
        bg-zinc-900/60 backdrop-blur-sm
        shadow-md
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
      `}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 h-16 transition-all">
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-all"
        >
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileArchive className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-lg font-bold uppercase tracking-tight">Docs</h1>
        </Link>
        <div className="flex items-center">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="btn border-none  flex items-center gap-2 px-3 py-1 rounded-md bg-error/10 text-error hover:bg-error/20 transition"
            >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="btn border-none  flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition"
            >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
