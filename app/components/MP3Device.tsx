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
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  if (!displaying || !currentTrack) return null;
  return (
    <div className="top-0 right-0 z-49 absolute inset-0 flex justify-center items-center bg-op-50">
      <div className="z-50 relative bg-gray-200 dark:bg-gray-800 shadow-lg p-4 rounded-lg w-80 text-white mp3-device">
        <IoMdCloseCircle
          onClick={onClose}
          className="top-2 right-2 absolute text-gray-400 hover:text-red-500 dark:text-gray-200 text-2xl cursor-pointer"
        />
        <div className="flex flex-col items-center mb-4 track-info">
          <Image
            src={currentTrack.album.cover_medium}
            alt={currentTrack.title}
            width={128}
            height={128}
            className="mb-2 rounded w-32 h-32"
            onClick={() => {
              router.push(`/album/${currentTrack.album.id}`);
              onClose();
            }}
          />
          <h3 className="font-semibold text-gray-700 dark:text-white text-lg">
            {currentTrack.title}
          </h3>
          <p
            className="text-gray-500 dark:text-gray-300 text-sm"
            onClick={() => {
              router.push(`/artist/${currentTrack.artist.id}`);
              onClose();
            }}
          >
            {currentTrack.artist.name}
          </p>
        </div>
        <div className="flex justify-between items-center mb-4 controls">
          <TbPlayerTrackPrevFilled
            className="text-gray-700 dark:text-white text-2xl hover:scale-125 transition-transform cursor-pointer"
            onClick={playPreviousTrack}
            title="Previous"
          />
          {isPlaying ? (
            <TbPlayerPauseFilled
              className="text-gray-700 dark:text-white text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={togglePlay}
              title="Pause"
            />
          ) : (
            <TbPlayerPlayFilled
              className="text-gray-700 dark:text-white text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={togglePlay}
              title="Play"
            />
          )}
          <TbPlayerTrackNextFilled
            className="text-gray-700 dark:text-white text-2xl hover:scale-125 transition-transform cursor-pointer"
            onClick={playNextTrack}
            title="Next"
          />
        </div>
        <div className="flex flex-col items-center volume-progress">
          <div className="flex items-center gap-2 mb-2 volume-control">
            {isMuted ? (
              <TbVolume3
                className="text-gray-700 dark:text-white text-xl cursor-pointer"
                onClick={toggleMute}
                title="Unmute"
              />
            ) : (
              <TbVolume
                className="text-gray-700 dark:text-white text-xl cursor-pointer"
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
              className="bg-gray-400 [&::-moz-range-thumb]:bg-blue-500 [&::-ms-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:bg-blue-500 dark:bg-gray-700 [&::-moz-range-thumb]:border-radius-full [&::-ms-thumb]:border-radius-full [&::-moz-range-thumb]:border-none [&::-ms-thumb]:border-none [&::-webkit-slider-thumb]:border-none rounded-lg [&::-webkit-slider-thumb]:rounded-full w-full [&::-webkit-slider-thumb]:w-4 h-2 [&::-webkit-slider-thumb]:h-4 appearance-none [&::-moz-range-thumb]:appearance-none [&::-ms-thumb]:appearance-none [&::-webkit-slider-thumb]:appearance-none cursor-pointer [&::-moz-range-thumb]:height-4 [&::-moz-range-thumb]:width-4 [&::-ms-thumb]:height-4 [&::-ms-thumb]:width-4"
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
