import ReactTypingEffect from "react-typing-effect";

const items = [
  "Content Creator",
  "Bounty Hunter",
  "Entreprenuer",
  "Firearms Instructor",
];

export const Hero = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-[350px] lg:h-[650px] relative">
          <div className="absolute w-full top-0 left-0 h-[350px] lg:h-[650px] bg-gradient-to-b from-slate-900/50 to-body z-5 flex items-center">
            <div className="max-w-xs mx-auto lg:container flex flex-col text-center lg:text-left">
              <div className="hidden lg:flex gap-4 mb-5">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-slate-800 px-3 py-0.5 text-sm font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl lg:text-5xl font-bold text-white mb-5">
                Stephen IRL is Creating Content On...
              </h1>
              <span className="text-indigo-600 text-2xl lg:text-5xl font-bold h-14">
                <ReactTypingEffect
                  speed={100}
                  eraseSpeed={75}
                  typingDelay={500}
                  eraseDelay={3000}
                  text={["YouTube", "TikTok", "Instagram", "Facebook", "Vimeo"]}
                />
              </span>
            </div>
          </div>
          <video id="video" autoPlay muted loop playsInline>
            <source
              src="https://jaralato.s3.amazonaws.com/bg-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
};
