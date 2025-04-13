"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSearch, FaDeezer } from "react-icons/fa";
import { IoInvertMode } from "react-icons/io5";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (!mounted) return null;

  return (
    <nav className="top-0 left-0 z-100 fixed flex flex-row justify-between items-center gap-5 bg-gray-200 dark:bg-gray-800 shadow-md px-8 py-4 w-full h-20">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-gray-500 dark:text-gray-200 text-xl"
      >
        <FaDeezer className="dark:text-shadow-blue-800 text-cyan-500 text-5xl" />
        Deezer Starr
      </Link>

      <form className="flex flex-row items-center bg-white dark:bg-gray-700 shadow-md px-4 py-2 rounded-full w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent px-2 outline-none w-full text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="flex justify-center items-center bg-sky-500 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-500 shadow-2xl p-2 rounded-full text-white"
        >
          <FaSearch size={20} />
        </button>
      </form>

      {mounted && (
        <button onClick={toggleTheme} className="p-2">
          <IoInvertMode
            size={30}
            className="text-gray-800 dark:text-gray-200 cursor-pointer"
          />
        </button>
      )}
    </nav>
  );
};

export default Navigation;
