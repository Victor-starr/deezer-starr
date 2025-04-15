import { Playlist } from "@/types";
import Image from "next/image";

const Paylists = (playlist: Playlist) => {
  return (
    <li className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg max-w-[250px] overflow-hidden">
      <Image
        src={playlist.picture_big}
        alt={playlist.title}
        className="shadow-2xl rounded-lg object-cover"
        width={220}
        height={220}
      />
      <h2 className="pt-2 w-full font-medium text-lg truncate">
        {playlist.title}
      </h2>
      <p className="w-full text-gray-500 text-md dark:text-gray-300 truncate">
        {playlist.nb_tracks} tracks
      </p>
    </li>
  );
};

export default Paylists;
