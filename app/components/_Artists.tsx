import { Artist } from "@/types";
import Image from "next/image";

const Artists = (artist: Artist) => {
  return (
    <li className="flex flex-col flex-shrink-0 items-center p-5 rounded-lg">
      <Image
        src={artist.picture_big}
        alt={artist.name}
        className="rounded-full"
        width={180}
        height={180}
      />
      <h2 className="pt-2 font-medium text-xl">{artist.name}</h2>
    </li>
  );
};

export default Artists;
