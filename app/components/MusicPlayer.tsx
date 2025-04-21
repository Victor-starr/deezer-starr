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

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const ctx = useContext(MusicPlayerContext);

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
      default:
        break;
    }
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
  } = ctx;

  return (
    <footer className="right-0 bottom-0 left-0 fixed flex flex-row justify-between items-center gap-2 bg-gray-500 dark:bg-gray-800 shadow-md px-10 py-4 text-white dark:text-gray-200">
      <audio ref={audioRef} src={currentTrack.preview} autoPlay />
      <div className="flex items-center gap-4 w-full">
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
          <p className="m-0 text-gray-200 dark:text-gray-500 text-xs md:text-sm">
            {currentTrack.artist.name}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 mr-8">
        <TbPlayerTrackPrevFilled
          className="text-2xl md:text-3xl cursor-pointer"
          title="Previous"
          onClick={playPreviousTrack}
        />

        {isPlaying ? (
          <TbPlayerPauseFilled
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={togglePlay}
            title="Stop"
          />
        ) : (
          <TbPlayerPlayFilled
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={togglePlay}
            title="Play"
          />
        )}
        <TbPlayerTrackNextFilled
          className="text-2xl md:text-3xl cursor-pointer"
          title="Next"
          onClick={playNextTrack}
        />
        {isMuted ? (
          <TbVolume3
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={toggleMute}
            title="Unmute"
          />
        ) : (
          <TbVolume
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={toggleMute}
            title="Mute"
          />
        )}
      </div>
    </footer>
  );
};

export default MusicPlayer;
