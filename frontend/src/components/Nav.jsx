import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect, useState } from "react";
import FileChartPie from "../icons/FileChartPie";

const Nav = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
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
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar bg-zinc-950 shadow-sm px-10 sticky top-0 z-50">
      <div className="flex-1">
        <span className="text-lg font-bold uppercase tracking-tight flex items-center">
          <FileChartPie className="h-6 w-6" />
          DOCS
        </span>
      </div>
      <div className="flex-none">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-16 rounded-full">
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
              <button>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </button>
              <button>
                <Link to="/settings">Settings</Link>
              </button>

              <button onClick={handleLogout}>
                <Link>Logout</Link>
              </button>
            </ul>
          </div>
        ) : (
          <button className="btn bg-white text-black rounded-4xl shadow-none hover:bg-transparent hover:text-white border-white transition-all duration-100">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
