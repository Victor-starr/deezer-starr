"use client";

import { useState } from "react";
import { Album, Playlist, Track, Artist } from "@/lib/types";
import TrackList from "@/app/components/_TracksList";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ArtistTabParams {
  tracks: Track[];
  playlists: Playlist[];
  albums: Album[];
  relArtist: Artist[];
}
export default function ArtistTabs({
  tracks,
  playlists,
  albums,
  relArtist,
}: ArtistTabParams) {
  const [activeTab, setActiveTab] = useState<keyof typeof titles | "top-track">(
    "top-track"
  );
  const titles = {
    playlist: "Playlists",
    album: "Albums",
    related: "Related Artists",
  };

  const router = useRouter();

  return (
    <section className="mt-8 w-full">
      <nav className="flex justify-center mb-6">
        <ul className="flex gap-6 font-medium text-sm md:text-base lg:text-lg">
          <li
            className={`hover:text-sky-500 cursor-pointer ${
              activeTab === "top-track" ? "text-sky-500" : ""
            }`}
            onClick={() => setActiveTab("top-track")}
          >
            Top
          </li>
          <li
            className={`hover:text-sky-500 cursor-pointer ${
              activeTab === "playlist" ? "text-sky-500" : ""
            }`}
            onClick={() => setActiveTab("playlist")}
          >
            Playlists
          </li>
          <li
            className={`hover:text-sky-500 cursor-pointer ${
              activeTab === "album" ? "text-sky-500" : ""
            }`}
            onClick={() => setActiveTab("album")}
          >
            Albums
          </li>
          <li
            className={`hover:text-sky-500 cursor-pointer ${
              activeTab === "related" ? "text-sky-500" : ""
            }`}
            onClick={() => setActiveTab("related")}
          >
            Related
          </li>
        </ul>
      </nav>

      <section className="space-y-12">
        {activeTab === "top-track" && (
          <article>
            <h2 className="mb-4 pl-10 font-semibold text-2xl">
              Popular Tracks
            </h2>
            <table className="bg-white dark:bg-gray-800 shadow-md mt-5 px-4 rounded-lg w-full">
              <tbody className="flex flex-col overflow-y-auto custom-scrollbar">
                <TrackList tracks={tracks} />
              </tbody>
            </table>
          </article>
        )}

        {activeTab !== "top-track" && (
          <article>
            <h2 className="mb-4 pl-10 font-semibold text-2xl">
              {titles[activeTab]}
            </h2>
            <ul className="flex flex-wrap justify-center gap-5 mt-5 px-4 h-auto overflow-y-auto custom-scrollbar">
              {activeTab === "playlist" &&
                playlists.map((playlist) => (
                  <li
                    key={playlist.id}
                    className="flex flex-col items-start bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg max-w-[250px]"
                  >
                    <Image
                      src={playlist.picture_big}
                      alt={playlist.title}
                      className="shadow-2xl rounded-lg object-cover"
                      width={220}
                      height={220}
                    />
                    <h2 className="pt-2 w-full font-medium text-lg truncate">
                      {playlist.title}
                    </h2>
                    <p className="w-full text-gray-500 text-md dark:text-gray-300 truncate">
                      {playlist.nb_tracks} tracks
                    </p>
                  </li>
                ))}
              {activeTab === "album" &&
                albums.map((album) => (
                  <li
                    key={album.id}
                    className="flex flex-col items-start bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg max-w-[250px]"
                  >
                    <Image
                      src={album.cover_big}
                      alt={album.title}
                      className="shadow-2xl rounded-lg hover:scale-102 transition-transform cursor-pointer"
                      width={200}
                      height={200}
                      onClick={() => router.push(`/album/${album.id}`)}
                    />
                    <h2
                      className="pt-2 w-full font-medium hover:text-blue-500 text-lg truncate cursor-pointer"
                      onClick={() => router.push(`/album/${album.id}`)}
                    >
                      {album.title}
                    </h2>
                  </li>
                ))}
              {activeTab === "related" &&
                relArtist.map((artist) => (
                  <li
                    key={artist.id}
                    className="flex flex-col flex-shrink-0 items-start bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg max-w-[250px]"
                  >
                    <Image
                      src={artist.picture_medium}
                      alt={artist.name}
                      className="shadow-2xl rounded-lg"
                      width={200}
                      height={200}
                      onClick={() => {
                        router.push(`/artist/${artist.id}`);
                      }}
                    />
                    <h2
                      className="pt-2 w-full font-medium text-lg truncate"
                      onClick={() => router.push(`/artist/${artist.id}`)}
                    >
                      {artist.name}
                    </h2>
                  </li>
                ))}
            </ul>
          </article>
        )}
      </section>
    </section>
  );
}
