"use client";
import { createContext } from "react";
import { Track } from "@/lib/types";

export interface MusicPlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  playTrack: (track: Track, index?: number) => void;
  togglePlay: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  setTrackList: (tracks: Track[]) => void;
  setProgress: (value: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const defaultMusicPlayer: MusicPlayerContextType = {
  currentTrack: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  playTrack: () => {},
  togglePlay: () => {},
  playNextTrack: () => {},
  playPreviousTrack: () => {},
  setTrackList: () => {},
  setProgress: () => {},
  audioRef: { current: null },
};

export const MusicPlayerContext =
  createContext<MusicPlayerContextType>(defaultMusicPlayer);
