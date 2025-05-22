import Threads from "../components/Threads";
import ShinyText from "../components/ShinyText";
import ChevronRight from "../icons/ChevronLeft";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Get Started button clicked");
    navigate("/signup");
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      <div className="w-full">
        <div className="absolute text-center top-25 w-full h-full">
          <ShinyText
            text="Welcome to Docs"
            speed={2}
            className="text-7xl font-bold"
          />
        </div>
        <div className="absolute text-center top-45 w-full h-full flex flex-col items-center">
          <ShinyText
            text="Your AI-Powered All In One Documentation Assistant"
            speed={3}
            className="text-3xl font-bold"
          />
          <button
            className="btn bg-white mt-2 rounded-4xl text-zinc-900 shadow-none cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-base">Get Started</span>
            <span>
              <ChevronRight className="inline-block" />
            </span>
          </button>
        </div>

        <div className="absolute text-center inset-0 w-full">
          <Threads amplitude={1} distance={0.1} enableMouseInteraction={true} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
