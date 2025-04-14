"use client";

import Image from "next/image";
import { useState } from "react";
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <footer className="right-0 bottom-0 left-0 fixed flex flex-row justify-between items-center gap-2 bg-gray-500 dark:bg-gray-800 shadow-md px-6 py-4 text-white dark:text-gray-200">
      <div className="flex items-center gap-4 w-full">
        <Image
          src="https://i1.sndcdn.com/artworks-UiKHJZBJKkvu-0-t240x240.jpg"
          alt="Bird Talk"
          width={50}
          height={50}
          className="rounded"
        />
        <div>
          <h3 className="m-0 font-semibold text-sm md:text-base">Bird Talk</h3>
          <p className="m-0 text-gray-200 dark:text-gray-500 text-xs md:text-sm">
            tokold
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 mr-8">
        <TbPlayerTrackPrevFilled
          className="text-2xl md:text-3xl cursor-pointer"
          title="Previous"
        />
        {isPlaying ? (
          <TbPlayerPauseFilled
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={() => setIsPlaying(false)}
            title="Stop"
          />
        ) : (
          <TbPlayerPlayFilled
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={() => setIsPlaying(true)}
            title="Play"
          />
        )}
        <TbPlayerTrackNextFilled
          className="text-2xl md:text-3xl cursor-pointer"
          title="Next"
        />

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="bg-gray-300 dark:bg-gray-600 rounded-lg w-75 h-1 accent-sky-300 appearance-none cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default MusicPlayer;
