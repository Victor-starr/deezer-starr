"use client";

import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
  TbVolume,
  TbVolume3,
} from "react-icons/tb";
import { MusicPlayerContext } from "../context/MusicPlayerContext";
import { useRouter } from "next/navigation";
import MP3Device from "./MP3Device";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [showMp3Device, setShowMp3Device] = useState(false);
  const ctx = useContext(MusicPlayerContext);
  const router = useRouter();

  const toggleMute = () => {
    if (ctx?.audioRef?.current) {
      ctx.audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const keyToggle = (e: KeyboardEvent) => {
    if (!ctx) return;
    switch (e.key) {
      case " ":
        e.preventDefault();
        ctx.togglePlay();
        break;
      case "ArrowLeft":
        e.preventDefault();
        ctx.playPreviousTrack();
        break;
      case "ArrowRight":
        e.preventDefault();
        ctx.playNextTrack();
        break;
      case "m":
        e.preventDefault();
        toggleMute();
        break;
      default:
        break;
    }
  };

  const handleInputRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ctx) return;
    const value = Number(e.target.value);
    ctx.setProgress(value);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyToggle);
    return () => {
      window.removeEventListener("keydown", keyToggle);
    };
  });

  if (!ctx || !ctx.currentTrack) return null;

  const {
    currentTrack,
    isPlaying,
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    audioRef,
    progress,
    duration,
  } = ctx;

  return (
    <>
      {showMp3Device && (
        <MP3Device
          displaying={showMp3Device}
          onClose={() => setShowMp3Device(false)}
          context={ctx}
          toggleMute={toggleMute}
          isMuted={isMuted}
          handleInputRange={handleInputRange}
        />
      )}
      <footer
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowMp3Device(true);
          }
        }}
        className="right-0 bottom-0 left-0 z-10 fixed flex flex-row justify-between items-center gap-10 md:gap-20 bg-gray-500 dark:bg-gray-800 shadow-md px-5 md:px-10 py-4 text-white dark:text-gray-200"
      >
        <audio ref={audioRef} src={currentTrack.preview} autoPlay />
        <div className="flex flex-1 items-center gap-4">
          <Image
            src={currentTrack.album.cover_small}
            alt={currentTrack.title}
            width={50}
            height={50}
            className="rounded"
          />
          <div>
            <h3 className="m-0 font-semibold text-sm md:text-base">
              {currentTrack.title}
            </h3>
            <p
              className="m-0 text-gray-200 hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-500 text-xs md:text-sm cursor-pointer"
              onClick={() => {
                router.push(`/artist/${currentTrack.artist.id}`);
              }}
            >
              {currentTrack.artist.name}
            </p>
          </div>
        </div>
        <div className="hidden md:block relative flex-2 mb-6">
          <label htmlFor="labels-range-input" className="sr-only">
            Labels range
          </label>
          <input
            id="labels-range-input"
            type="range"
            min="0"
            max={duration || 0}
            value={progress}
            onChange={handleInputRange}
            className="bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-2 appearance-none cursor-pointer"
          />
          <span className="-bottom-6 absolute text-gray-500 dark:text-gray-400 text-sm start-0">
            {new Date(progress * 1000).toISOString().slice(14, 19)}
          </span>
          <span className="-bottom-6 absolute text-gray-500 dark:text-gray-400 text-sm end-0">
            {new Date((duration || 0) * 1000).toISOString().slice(14, 19)}
          </span>
        </div>

        <div className="flex flex-1 justify-center items-center gap-6 mr-8">
          <TbPlayerTrackPrevFilled
            className="text-2xl md:text-3xl hover:scale-125 transition-transform cursor-pointer"
            title="Previous"
            onClick={playPreviousTrack}
          />

          {isPlaying ? (
            <TbPlayerPauseFilled
              className="text-2xl md:text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={togglePlay}
              title="Stop"
            />
          ) : (
            <TbPlayerPlayFilled
              className="text-2xl md:text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={togglePlay}
              title="Play"
            />
          )}
          <TbPlayerTrackNextFilled
            className="text-2xl md:text-3xl hover:scale-125 transition-transform cursor-pointer"
            title="Next"
            onClick={playNextTrack}
          />
          {isMuted ? (
            <TbVolume3
              className="text-2xl md:text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={toggleMute}
              title="Unmute"
            />
          ) : (
            <TbVolume
              className="text-2xl md:text-3xl hover:scale-125 transition-transform cursor-pointer"
              onClick={toggleMute}
              title="Mute"
            />
          )}
        </div>
      </footer>
    </>
  );
};

export default MusicPlayer;
