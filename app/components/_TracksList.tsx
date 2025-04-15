import { Track } from "@/types";
import Image from "next/image";
const TrackList = (track: Track) => {
  return (
    <tr className="flex flex-row justify-between items-center shadow-md p-4 border-gray-500 border-b max-w">
      <td className="flex-1">
        <Image
          src={track.album.cover_small}
          alt={track.title_short}
          width={50}
          height={50}
        />
      </td>
      <td className="flex-1 px-2 truncate">{track.title_short}</td>
      <td className="flex-1 px-2 truncate">{track.artist.name}</td>
      <td className="flex-1 px-2 truncate">Certified Gang</td>
      <td className="flex-1 px-2 text-center">3:45</td>
    </tr>
  );
};

export default TrackList;
