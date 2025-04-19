import { fetchDeezerAlbums } from "@/lib/deezerServices";
import { Album } from "@/lib/types";
import Image from "next/image";

export default async function AlbumsSection() {
  const albums: Album[] = await fetchDeezerAlbums();

  return (
    <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
      {albums.map((album) => (
        <li
          key={album.id}
          className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg max-w-[250px]"
        >
          <Image
            src={album.cover_big}
            alt={album.title}
            className="shadow-2xl rounded-lg"
            width={200}
            height={200}
          />
          <h2 className="pt-2 w-full font-medium text-lg truncate">
            {album.title}
          </h2>
          <p className="w-full text-gray-500 text-md dark:text-gray-300 truncate">
            {album.artist.name}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function AlbumsLoader() {
  return (
    <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
      {Array.from({ length: 5 }).map((_, i) => (
        <li
          key={i}
          className="flex flex-col items-start gap-2 p-5 rounded-lg max-w-[250px]"
        >
          <div className="bg-gray-400 dark:bg-gray-200 shadow-2xl rounded-lg w-full h-[200px] animate-pulse"></div>
          <h2 className="bg-gray-400 dark:bg-gray-200 pt-2 rounded-md w-[200px] h-[28px] animate-pulse"></h2>
          <p className="bg-gray-400 dark:bg-gray-200 rounded-md w-[120px] h-[24px] animate-pulse"></p>
        </li>
      ))}
    </ul>
  );
}
