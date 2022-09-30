import { IPlatform } from "@/types";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const platforms = [
  {
    icon: faTiktok,
    label: "TikTok",
  },
  {
    icon: faYoutube,
    label: "Youtube",
  },
  {
    icon: faFacebook,
    label: "Facebook",
  },
  {
    icon: faInstagram,
    label: "Instagram",
  },
];

export const Livestreams = () => {
  const [activePlatform, setActivePlatform] = useState<IPlatform>(platforms[0]);
  return (
    <>
      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faSignal}
              className=" text-xl lg:text-3xl text-indigo-600"
            />
            <span className="text-base text-xl lg:text-3xl font-bold">
              Livestreams
            </span>
          </div>
          <div className="space-x-5 space-y-5 lg:space-y-0 flex items-center">
            <span className="text-base text-sm font-bold hidden lg:inline-block">
              Watch LIVE on
            </span>
            {platforms.map((platform, index) => (
              <button
                onClick={() => setActivePlatform(platform)}
                type="button"
                className={`inline-flex justify-center items-center gap-4 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${
                  activePlatform.label === platform.label
                    ? "bg-indigo-600"
                    : "bg-lighter"
                }`}
              >
                <FontAwesomeIcon icon={platform.icon} className="text-md" />
                <span className="hidden lg:inline-block">{platform.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 bg-dark p-5 rounded-lg h-[350px] lg:h-[880px] mx-5 lg:mx-0">
          <iframe
            src="https://www.youtube.com/embed/NsGW2VTqeqQ?autoplay=1&mute=1"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
