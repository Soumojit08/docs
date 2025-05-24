import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect, useState } from "react";
import FileChartPie from "../icons/FileChartPie";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  attached: {
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    borderRadius: "0px",
    boxShadow: "0 2px 16px 0 rgba(31,38,135,0.10)", // subtle shadow for attached
    background: "rgba(9,9,11,1)", // bg-zinc-950
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backdropFilter: "blur(0px)",
    x: 0,
    transform: "none",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  floating: {
    top: 24,
    left: "50%",
    right: "auto",
    width: 420,
    x: "-50%",
    borderRadius: "1.5rem",
    boxShadow: "0 0 32px 4px rgba(180,180,180,0.25)", // gray glow
    background: "rgba(255,255,255,0.08)",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backdropFilter: "blur(12px)",
    transform: "translateX(-50%)",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const Nav = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  const [floating, setFloating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setFloating(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed flex items-center justify-between z-[999]"
        initial={floating ? "attached" : "floating"}
        animate={floating ? "floating" : "attached"}
        variants={navVariants}
        style={{
          left: floating ? "50%" : 0,
          right: floating ? "auto" : 0,
          width: floating ? 420 : "100%",
        }}
      >
        <span className="text-lg font-bold uppercase tracking-tight flex items-center select-none">
          <FileChartPie className="h-6 w-6" />
          <span className="ml-2">DOCS</span>
        </span>
        <div>
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="User Profile"
                    src={user?.profilePic}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-zinc-900 rounded-box z-1 mt-1 w-24 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-white text-black rounded-full shadow-none hover:bg-transparent hover:text-white border-white transition-all duration-100 px-6 py-2"
              style={{
                fontWeight: 500,
                fontSize: "1rem",
                minWidth: 80,
              }}
            >
              Login
            </Link>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
