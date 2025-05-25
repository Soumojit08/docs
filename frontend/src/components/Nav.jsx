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
    x: "0%",
    borderRadius: "0px",
    boxShadow: "none",
    background: "rgba(9,9,11,1)",
    backdropFilter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
  floating: {
    top: 24,
    left: "50%",
    x: "-50%" ,
    width: "420px",
    borderRadius: "1.5rem",
    boxShadow: "0 0 12px 2px rgba(180,180,180,0.25)",
    background: "rgba(30,30,30,0.85)",
    backdropFilter: "blur(12px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
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
        className="fixed z-[999]"
        initial="attached"
        animate={floating ? "floating" : "attached"}
        variants={navVariants}
        style={{
          width: floating ? "420px" : "100%",
        }}
      >
        <motion.div
          className="flex items-center justify-between w-full px-10 py-3"
          layout
        >
          <span className="text-lg font-bold uppercase tracking-tight flex items-center select-none">
            <FileChartPie className="h-6 w-6" />
            <span className="ml-2">DOCS</span>
          </span>

          <motion.div layout>
            {isAuthenticated ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  style={{ minWidth: 40, minHeight: 40, width: 40, height: 40 }}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
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
                className="btn bg-white text-black rounded-full shadow-none hover:bg-transparent hover:text-white border-white transition-all duration-100"
                style={{
                  height: 40,
                  minHeight: 40,
                  padding: "0 20px",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Login
              </Link>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
