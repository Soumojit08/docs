import { useState } from "react";
import ChevronRight from "../../icons/ChevronLeft";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const [strokeColor, setStrokeColor] = useState("#1d1d1d");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  const handleHover = () => {
    setStrokeColor("#fff");
  };

  const handleMouseLeave = () => {
    setStrokeColor("#1d1d1d");
  };

  return (
    <button
      className="bg-white btn text-zinc-900 rounded-full cursor-pointer mt-4 text-lg py-6 hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 ease-in-out flex items-center justify-center"
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <span>Get Started</span>
      <ChevronRight stroke={strokeColor} />
    </button>
  );
};

export default GetStarted;
