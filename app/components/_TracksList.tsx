"use client";
import { Track } from "@/lib/types";
import Image from "next/image";
import { useContext } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext";

const TrackList = ({ tracks }: { tracks: Track[] }) => {
  const { playTrack, setTrackList } = useContext(MusicPlayerContext);

  const handlePlay = (track: Track, index: number) => {
    setTrackList(tracks);
    playTrack(track, index);
  };

  return (
    <>
      {tracks.map((track, index) => (
        <tr
          key={track.id}
          className="flex flex-row justify-between items-center shadow-md p-4 border-gray-500 border-b cursor-pointer max-w"
          onClick={() => handlePlay(track, index)}
        >
          <td className="flex-1">
            <Image
              src={track.album.cover_small}
              alt={track.title_short}
              width={50}
              height={50}
            />
          </td>
          <td className="flex-1 px-2 truncate">{track.title_short}</td>
          <td className="flex-1 px-2 truncate">{track.artist.name}</td>
          <td className="flex-1 px-2 text-center">{track.duration}</td>
        </tr>
      ))}
    </>
  );
};

export default TrackList;
