import { IStat } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  stat: IStat;
}

export const StatItem = ({ stat }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center text-center bg-indigo-500 py-10 rounded-lg">
        <FontAwesomeIcon icon={stat.icon} className="text-4xl mb-5" />
        <span className="text-white font-bold">{stat.followers}</span>
      </div>
    </>
  );
};
