"use client";

import { MusicPlayerContext } from "@/app/context/MusicPlayerContext";
import { Album, Track } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface AlbumHeaderProps {
  album: Album;
}
export default function AlbumHeader({ album }: AlbumHeaderProps) {
  const { playTrack, setTrackList } = useContext(MusicPlayerContext);
  const handlePlay = (track: Track, index: number) => {
    setTrackList(album.tracks.data);
    playTrack(track, index);
  };
  return (
    <header
      className="relative flex md:flex-row flex-col justify-center items-center gap-8 bg-cover bg-center px-8 py-10 w-full"
      style={{ backgroundImage: `url(${album.artist.picture_xl})` }}
    >
      <div className="absolute inset-0 bg-black bg-op-50"></div>
      <Image
        src={album.cover_big}
        alt={album.title}
        width={300}
        height={300}
        className="z-10 shadow-lg rounded-lg object-cover"
      />
      <div className="z-10 flex flex-col text-white">
        <h1 className="font-bold text-2xl md:text-4xl">{album.title}</h1>
        <Link
          href={`/artist/${album.artist.id}`}
          className="mt-2 text-gray-300 hover:text-blue-500 text-base md:text-xl hover:underline hover:scale-102 transition-transform cursor-pointer transform"
        >
          {album.artist.name}
        </Link>
        <p className="mt-2 font-bold text-gray-300 text-sm">{`Released: ${album.release_date}`}</p>
        <p className="font-bold text-sm">{`${album.fans.toLocaleString()} fans`}</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 shadow mt-4 px-6 py-2 rounded-lg text-white transition"
          onClick={() => handlePlay(album.tracks.data[0], 0)}
        >
          Listen Now
        </button>
      </div>
    </header>
  );
}
