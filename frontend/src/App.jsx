import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { useEffect } from "react";
import useAuthStore from "./store/useAuthStore";

const App = () => {
  const fetchMe = useAuthStore((state) => state.getMe);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  return (
    <div className="bg-zinc-900">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </div>
  );
};

export default App;
