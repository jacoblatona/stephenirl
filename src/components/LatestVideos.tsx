import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IVideo } from "@/types";
import { VideoItem } from "./VideoItem";
import Slider from "react-slick";

interface Props {
  videos: IVideo[];
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export const LatestVideos = ({ videos }: Props) => {
  return (
    <>
      <div className="py-10 lg:py-20 mx-2 lg:mx-0">
        <div className="flex justify-center lg:justify-start gap-3 items-center text-center">
          <FontAwesomeIcon
            icon={faFire}
            className="text-xl lg:text-3xl text-indigo-600"
          />
          <span className="text-base text-xl lg:text-3xl font-bold">
            Latest Videos
          </span>
        </div>

        <div className="mt-5">
          <Slider {...settings}>
            {videos.map((video) => (
              <div key={video.id} className="px-3">
                <VideoItem video={video} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
