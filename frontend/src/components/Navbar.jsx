import { Link } from "react-router-dom";
import { LogOut, FileArchive } from "lucide-react";
import useAuthStore from "../store/useAuthStore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 30) {
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

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        bg-base-100 border-b border-base-300
        shadow-md
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
      `}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 h-16 transition-all duration-300">
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
          {isAuthenticated && (
            <button
              onClick={logout}
              className="btn border-none  flex items-center gap-2 px-3 py-1 rounded-xl bg-error/10 text-error hover:bg-error/20 transition"
            >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
