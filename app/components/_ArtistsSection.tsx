import { fetchDeezerArtists } from "@/lib/deezerServices";
import { Artist } from "@/lib/types";
import Image from "next/image";

export default async function ArtistsSection() {
  const artists: Artist[] = await fetchDeezerArtists();
  return (
    <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
      {artists.map((artist) => (
        <li
          key={artist.id}
          className="flex flex-col flex-shrink-0 items-center p-5 rounded-lg"
        >
          <Image
            src={artist.picture_big}
            alt={artist.name}
            className="rounded-full"
            width={180}
            height={180}
          />
          <h2 className="pt-2 font-medium text-xl">{artist.name}</h2>
        </li>
      ))}
    </ul>
  );
}
export async function ArtistLoader() {
  return (
    <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="flex flex-col items-center p-5 rounded-lg">
          <div className="bg-gray-400 dark:bg-gray-200 rounded-full w-[180px] h-[180px] animate-pulse" />
          <h2 className="bg-gray-400 dark:bg-gray-200 mt-2 rounded-md w-[200px] h-[28px] animate-pulse"></h2>
        </li>
      ))}
    </ul>
  );
}
