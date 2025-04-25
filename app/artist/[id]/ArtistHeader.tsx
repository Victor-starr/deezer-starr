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
      className="flex flex-col justify-center items-center bg-cover bg-center shadow-lg w-full h-[300px]"
    >
      <h1 className="drop-shadow-md font-bold text-white text-4xl">
        {artist.name}
      </h1>
      <span className="flex flex-col items-center mt-2">
        <p className="text-gray-200 text-lg">{artist.nb_fan} fans</p>
        <button
          className="bg-sky-500 hover:bg-sky-700 shadow-md mt-2 px-4 py-2 rounded-full font-medium text-white"
          onClick={handlePlay}
        >
          Listen
        </button>
      </span>
    </header>
  );
}
