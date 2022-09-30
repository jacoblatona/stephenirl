import { IVideo } from "@/types";

interface Props {
  video: IVideo;
}

export const VideoItem = ({ video }: Props) => {
  return (
    <>
      <div className="w-full rounded-lg bg-dark p-3">
        <img src={video.thumbnail} className="w-full mb-3 rounded-lg" />
        <a
          href={`https://youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm font-bold text-base truncate">{video.title}</p>
        </a>
      </div>
    </>
  );
};
