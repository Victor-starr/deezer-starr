"use client";

import { ReactNode, useState, useRef, useEffect, useCallback } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";
import { Track } from "@/lib/types";

export default function MusicPlayerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackList, setTrackList] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
    null
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  const playTrack = useCallback((track: Track, index?: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current.src = track.preview;
    }
    setCurrentTrack(track);
    setIsPlaying(true);
    if (index !== undefined) setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Error playing audio:", error);
          }
        });
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Error playing audio:", error);
          }
        });
    }
  }, [isPlaying]);

  const playNextTrack = useCallback(() => {
    if (currentTrackIndex !== null && trackList.length > 0) {
      const nextIndex = (currentTrackIndex + 1) % trackList.length;
      playTrack(trackList[nextIndex], nextIndex);
    }
  }, [currentTrackIndex, trackList, playTrack]);

  const playPreviousTrack = useCallback(() => {
    if (currentTrackIndex !== null && trackList.length > 0) {
      const prevIndex =
        (currentTrackIndex - 1 + trackList.length) % trackList.length;
      playTrack(trackList[prevIndex], prevIndex);
    }
  }, [currentTrackIndex, trackList, playTrack]);

  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  }, []);

  const handleSeek = useCallback((value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setProgress(value);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", playNextTrack);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", playNextTrack);
      };
    }
  }, [handleTimeUpdate, playNextTrack]);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        progress,
        duration,
        playTrack,
        togglePlay,
        setProgress: handleSeek,
        audioRef,
        playNextTrack,
        playPreviousTrack,
        setTrackList,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}
