"use client";
import { MusicPlayerContext } from "@/app/context/MusicPlayerContext";
import { Artist, Track } from "@/lib/types";
import { useContext } from "react";

interface AlbumHeaderProps {
  artist: Artist;
  tracklist: Track[];
}

export default function ArtistHeader({ artist, tracklist }: AlbumHeaderProps) {
  const { playTrack, setTrackList } = useContext(MusicPlayerContext);

  const handlePlay = () => {
    if (tracklist.length > 0) {
      setTrackList(tracklist);
      playTrack(tracklist[0], 0);
    }
  };

  return (
    <header
      style={{ backgroundImage: `url(${artist.picture_xl})` }}
      className="relative flex flex-col justify-center items-center bg-cover bg-center shadow-lg py-20 w-full h-auto md:h-[300px]"
    >
      <div className="absolute inset-0 bg-black bg-op-50"></div>
      <h1 className="z-10 drop-shadow-md font-bold text-white text-3xl md:text-4xl">
        {artist.name}
      </h1>
      <span className="z-10 flex flex-col items-center mt-2">
        <p className="text-gray-200 text-base md:text-lg">
          {artist.nb_fan} fans
        </p>
        <button
          className="bg-sky-500 hover:bg-sky-700 shadow-md mt-2 px-4 py-2 rounded-full font-medium text-white text-sm md:text-base"
          onClick={handlePlay}
        >
          Listen
        </button>
      </span>
    </header>
  );
}
