"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaDeezer, FaSearch } from "react-icons/fa";
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
    <nav className="top-0 right-0 left-0 z-100 fixed flex flex-row justify-between items-center gap-5 bg-gray-200 dark:bg-gray-800 shadow-md px-8 py-4 w-full h-20">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-gray-500 dark:text-gray-200 text-xl"
      >
        <FaDeezer className="dark:text-shadow-blue-800 text-cyan-500 text-5xl" />
        Deezer Starr
      </Link>

      <div className="flex items-center gap-4">
        {/* TODO: ENABLE WHEN SEARCH PAGE IS READY */}
        <Link href={"/search"} className="block p-2">
          <FaSearch size={20} className="text-gray-800 dark:text-gray-200" />
        </Link>

        {mounted && (
          <button onClick={toggleTheme} className="p-2">
            <IoInvertMode
              size={30}
              className="text-gray-800 dark:text-gray-200 cursor-pointer"
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
