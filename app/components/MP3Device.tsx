"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
  TbVolume,
  TbVolume3,
} from "react-icons/tb";
import { MusicPlayerContext } from "../context/MusicPlayerContext";

function MP3Device() {
  const [isMuted, setIsMuted] = useState(false);
  const ctx = useContext(MusicPlayerContext);

  const toggleMute = () => {
    if (ctx?.audioRef?.current) {
      ctx.audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleInputRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ctx) return;
    const value = Number(e.target.value);
    ctx.setProgress(value);
  };

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
    <div className="bg-gray-800 shadow-lg p-4 rounded-lg w-80 text-white mp3-device">
      <audio ref={audioRef} src={currentTrack.preview} autoPlay />
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
  );
}

export default MP3Device;
