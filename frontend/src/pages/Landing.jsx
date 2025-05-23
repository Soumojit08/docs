import Threads from "../components/Threads";
import ShinyText from "../components/ShinyText";
import GetStarted from "../components/Buttons/GetStarted";
import SpotlightCard from "../components/SpotlightCard";
import { useState } from "react";

const Landing = () => {
  const [card] = useState([
    {
      title: "Boost Your Experience",
      description:
        "Get exclusive benefits, features & 24/7 support as a permanent club member.",
      buttonText: "Join Now",
      icon: "sparkles",
    },
    {
      title: "Premium Features",
      description:
        "Access a suite of advanced tools and functionalities to enhance your workflow.",
      buttonText: "Learn More",
      icon: "key",
    },
    {
      title: "Support Our Mission",
      description:
        "Your contribution helps us continue to develop and improve.",
      buttonText: "Donate",
      icon: "heart",
    },
  ]);

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-[40vh] flex flex-col justify-center items-center pt-32 pb-12">
        <ShinyText
          text="Welcome to Docs"
          speed={2}
          className="text-7xl font-bold mb-4 text-center tracking-tight"
        />
        <ShinyText
          text="Your AI-Powered All In One Documentation Assistant Here."
          speed={3}
          className="text-2xl font-light mb-4 text-center tracking-loose"
        />
        <GetStarted />
      </section>

      {/* Threads Animation */}
      <section className="absolute inset-0 top-10 mb-24">
        <Threads amplitude={1} distance={0.1} enableMouseInteraction={true} />
      </section>

      {/* Cards Section */}
      <section className="relative z-40 flex flex-wrap items-stretch justify-center gap-8 pb-16 mt-96">
        {card.map((item, index) => (
          <SpotlightCard
            key={index}
            className="w-80 mx-4 my-4 p-6 bg-neutral-800 rounded-lg shadow-lg"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="flex flex-col text-left">
              <span></span>
              <h2 className="text-2xl font-bold mb-2 text-left">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.description}</p>
              <button className="mt-4 btn bg-white text-zinc-900 shadow-none rounded-lg w-2/4">
                {item.buttonText}
              </button>
            </div>
          </SpotlightCard>
        ))}
      </section>
    </div>
  );
};

export default Landing;
