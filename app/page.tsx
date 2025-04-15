"use client";

import Artists from "./components/_Artists";
import Paylists from "./components/_Playlists";
import ALbums from "./components/_ALbums";
import TrackList from "./components/_TracksList";
import { useEffect, useState } from "react";
import { Playlist, Artist, Album, Track } from "@/types";

export default function Home() {
  const [homeData, setHomeData] = useState<{
    playlists: Playlist[];
    artists: Artist[];
    albums: Album[];
    tracks: Track[];
  }>({
    playlists: [],
    artists: [],
    albums: [],
    tracks: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api");
        const data = await res.json();
        setHomeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  console.log(homeData.tracks[0]);

  return (
    <main className="flex flex-col items-center px-5 pt-8 pb-25 h-full">
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Playlists</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-85 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {homeData.playlists.map((playlist) => (
            <Paylists key={playlist.id} {...playlist} />
          ))}
        </ul>
      </section>
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Artists</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {homeData.artists.map((artist) => (
            <Artists key={artist.id} {...artist} />
          ))}
        </ul>
      </section>
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Most Streamed Albums</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {homeData.albums.map((album) => (
            <ALbums key={album.id} {...album} />
          ))}
        </ul>
      </section>
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Tracks</h1>
        <table className="mt-5 px-4 w-full">
          <tbody className="flex flex-col overflow-y-auto custom-scrollbar">
            {homeData.tracks.map((track) => (
              <TrackList key={track.id} {...track} />
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
