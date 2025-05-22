import Threads from "../components/Threads";
import ShinyText from "../components/ShinyText";
import GetStarted from "../components/Buttons/GetStarted";

const Landing = () => {
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
        <div className="absolute text-center top-45 w-full h-full flex flex-col items-center z-[99]">
          <ShinyText
            text="Your AI-Powered All In One Documentation Assistant Here."
            speed={3}
            className="text-3xl font-bold"
          />
          <GetStarted />
        </div>

        <div className="absolute text-center inset-0 w-full">
          <Threads amplitude={1} distance={0.1} enableMouseInteraction={true} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
