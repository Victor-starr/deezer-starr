import { Album } from "@/lib/types";
import Image from "next/image";

const Albums = (album: Album) => {
  return (
    <li className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg max-w-[250px]">
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
  );
};

export default Albums;
