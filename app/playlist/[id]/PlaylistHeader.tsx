"use client";

import { MusicPlayerContext } from "@/app/context/MusicPlayerContext";
import { Playlist, Track } from "@/lib/types";
import Image from "next/image";
import { useContext } from "react";

interface PlaylistHeaderProps {
  playlist: Playlist;
}
export default function PlaylistHeader({ playlist }: PlaylistHeaderProps) {
  const { playTrack, setTrackList } = useContext(MusicPlayerContext);
  const handlePlay = (track: Track, index: number) => {
    setTrackList(playlist.tracks.data);
    playTrack(track, index);
  };
  return (
    <header className="relative flex md:flex-row flex-col justify-center items-center gap-8 bg-gray-200 dark:bg-gray-700 py-10 w-full">
      <Image
        src={playlist.picture_big}
        alt={playlist.title}
        width={300}
        height={300}
        className="shadow-lg rounded-lg object-cover"
      />
      <div className="flex flex-col text-gray-800 dark:text-gray-100">
        <h1 className="font-bold text-4xl">{playlist.title}</h1>
        <h2 className="mt-2 text-gray-600 dark:text-gray-300 text-xl">
          {playlist.description}
        </h2>
        <p className="mt-2 font-bold text-gray-600 dark:text-gray-300 text-sm">{`Released: ${playlist.creation_date}`}</p>
        <p className="font-bold text-sm">{`${playlist.nb_tracks} tracks`}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 shadow mt-4 px-6 py-2 rounded-lg text-white transition"
          onClick={() => handlePlay(playlist.tracks.data[0], 0)}
        >
          Listen Now
        </button>
      </div>
    </header>
  );
}
