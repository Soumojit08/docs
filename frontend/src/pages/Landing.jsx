import Threads from "../components/Threads";
import ShinyText from "../components/ShinyText";

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      <div className="w-full">
        <div className="absolute text-center top-30 w-full h-full">
          <ShinyText
            text="Welcome to Our Platform"
            speed={2}
            className="text-7xl font-bold"
          />
        </div>
        <div className="absolute text-center inset-0 w-full">
          <Threads amplitude={1} distance={0.1} enableMouseInteraction={true} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
