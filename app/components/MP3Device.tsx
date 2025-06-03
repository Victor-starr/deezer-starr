"use client";
import Image from "next/image";
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
  TbVolume,
  TbVolume3,
} from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import { MusicPlayerContextType } from "../context/MusicPlayerContext";
interface musicmp3prop {
  displaying: boolean;
  onClose: () => void;
  context: MusicPlayerContextType;
  toggleMute: () => void;
  isMuted?: boolean;
  handleInputRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function MP3Device({
  displaying,
  onClose,
  context,
  toggleMute,
  isMuted,
  handleInputRange,
}: musicmp3prop) {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    progress,
    duration,
  } = context;

  if (!displaying || !currentTrack) return null;
  return (
    <div className="top-0 right-0 z-49 absolute inset-0 flex justify-center items-center bg-op-50">
      <div className="z-50 relative bg-gray-800 shadow-lg p-4 rounded-lg w-80 text-white mp3-device">
        <IoMdCloseCircle
          onClick={onClose}
          className="top-2 right-2 absolute hover:text-red-400 text-2xl cursor-pointer"
        />
        <div className="flex flex-col items-center mb-4 track-info">
          <Image
            src={currentTrack.album.cover_medium}
            alt={currentTrack.title}
            width={128}
            height={128}
            className="mb-2 rounded w-32 h-32"
          />
          <h3 className="font-semibold text-lg">{currentTrack.title}</h3>
          <p className="text-gray-400 text-sm">{currentTrack.artist.name}</p>
        </div>
        <div className="flex justify-between items-center mb-4 controls">
          <TbPlayerTrackPrevFilled
            className="text-2xl hover:scale-125 transition-transform cursor-pointer"
            onClick={playPreviousTrack}
            title="Previous"
          />
          {isPlaying ? (
            <TbPlayerPauseFilled
              className="text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={togglePlay}
              title="Pause"
            />
          ) : (
            <TbPlayerPlayFilled
              className="text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={togglePlay}
              title="Play"
            />
          )}
          <TbPlayerTrackNextFilled
            className="text-2xl hover:scale-125 transition-transform cursor-pointer"
            onClick={playNextTrack}
            title="Next"
          />
        </div>
        <div className="flex flex-col items-center volume-progress">
          <div className="flex items-center gap-2 mb-2 volume-control">
            {isMuted ? (
              <TbVolume3
                className="text-xl cursor-pointer"
                onClick={toggleMute}
                title="Unmute"
              />
            ) : (
              <TbVolume
                className="text-xl cursor-pointer"
                onClick={toggleMute}
                title="Mute"
              />
            )}
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={progress}
              onChange={handleInputRange}
              className="w-full"
            />
          </div>
          <div className="flex justify-between w-full text-gray-400 text-xs time-info">
            <span>{new Date(progress * 1000).toISOString().slice(14, 19)}</span>
            <span>
              {new Date((duration || 0) * 1000).toISOString().slice(14, 19)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MP3Device;
