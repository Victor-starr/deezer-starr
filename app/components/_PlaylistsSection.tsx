import { fetchDeezerPlaylists } from "@/lib/deezerServices";
import { Playlist } from "@/lib/types";
import Image from "next/image";

export default async function PlaylistsSection() {
  const playlists: Playlist[] = await fetchDeezerPlaylists();

  return (
    <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-85 overflow-x-auto whitespace-nowrap custom-scrollbar">
      {playlists.map((playlist) => (
        <li
          key={playlist.id}
          className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg max-w-[250px] overflow-hidden"
        >
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
      ))}
    </ul>
  );
}

export async function PlaylistsLoader() {
  return (
    <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-85 overflow-x-auto whitespace-nowrap custom-scrollbar">
      {Array.from({ length: 5 }).map((_, i) => (
        <li
          key={i}
          className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg max-w-[250px] overflow-hidden"
        >
          <div className="bg-gray-400 dark:bg-gray-200 shadow-2xl rounded-lg w-[220px] h-[220px] object-cover animate-pulse" />
          <h2 className="bg-gray-400 dark:bg-gray-200 my-2 rounded-md w-[200px] h-[28px] font-medium truncate animate-pulse"></h2>
          <p className="bg-gray-400 dark:bg-gray-200 rounded-md w-[200px] h-[28px] truncate animate-pulse"></p>
        </li>
      ))}
    </ul>
  );
}
