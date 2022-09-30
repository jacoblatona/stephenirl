import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { StatItem } from "./StatItem";

const stats = [
  { icon: faFacebook, followers: 196 },
  { icon: faTwitter, followers: 5194 },
  { icon: faYoutube, followers: 6180 },
  { icon: faTiktok, followers: 48000 },
  { icon: faInstagram, followers: 2215 },
];

export const Stats = () => {
  return (
    <>
      <div className="w-full  py-10 lg:py-20 bg-indigo-600 text-white lg:mt-20 px-5 lg:px-0">
        <p className="text-center font-extrabold text-xl lg:text-3xl">Stats</p>
        <div className="container mx-auto mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-5 text-center gap-5 lg:gap-10">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
