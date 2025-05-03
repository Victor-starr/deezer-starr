"use client";

import { FaSearch } from "react-icons/fa";
import { Album, Artist, Playlist, Track } from "@/lib/types";
import SearchSection from "./SearchSection";
import { useState } from "react";
import { fetchDeezerSearch } from "@/lib/deezerServices";

export type typesType = "track" | "playlist" | "album" | "artist";
export interface SearchProps {
  artist: Artist[];
  album: Album[];
  playlist: Playlist[];
  track: Track[];
}

export default function Search() {
  const [searchResult, setSearchResult] = useState<SearchProps | null>(null);

  const handleSumition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const q = formdata.get("search")?.toString();
    if (!q) return;
    try {
      const res: SearchProps = await fetchDeezerSearch(q);
      setSearchResult(res);
    } catch (error) {
      setSearchResult(null);
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 px-4 min-h-screen text-gray-800 dark:text-gray-200">
      <form
        onSubmit={handleSumition}
        className="relative bg-white dark:bg-gray-800 shadow-lg mt-10 p-6 rounded-2xl w-full max-w-lg"
      >
        <div className="relative">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="dark:bg-gray-700 p-4 pr-12 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-200 text-sm dark:placeholder-gray-400"
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.stopPropagation();
              }
              if (e.key === "m") {
                e.preventDefault();
                e.currentTarget.value += "m";
              }
            }}
          />
          <button
            type="submit"
            className="top-1/2 right-4 absolute text-gray-500 hover:text-blue-600 dark:hover:text-gray-200 dark:text-gray-400 -translate-y-1/2 transform"
            aria-label="Submit search"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      <div className="mt-6 px-2 w-full max-w-4xl">
        {searchResult && <SearchSection data={searchResult} />}
      </div>
    </main>
  );
}
