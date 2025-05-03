import { Track, Album, Artist, Playlist } from "@/lib/types";
import Image from "next/image";
import { useContext, useState } from "react";
import { typesType, SearchProps } from "@/app/search/page";
import { useRouter } from "next/navigation";
import { MusicPlayerContext } from "../context/MusicPlayerContext";

interface SearchSectionProps {
  data: SearchProps;
}

export default function SearchSection({ data }: SearchSectionProps) {
  const [selectedType, setSelectedType] = useState<typesType>("track");
  const { playTrack, setTrackList } = useContext(MusicPlayerContext);

  const handlePlay = (track: Track, index: number) => {
    setTrackList(items as Track[]);
    playTrack(track, index);
  };

  const items = data[selectedType];
  const router = useRouter();

  return (
    <section>
      <nav className="mb-6">
        <ul className="flex justify-center gap-4">
          {["track", "playlist", "album", "artist"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type as typesType)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedType === type
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </ul>
      </nav>
      <ul className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {items.map((item, index) => {
          if (selectedType === "track") {
            const track = item as Track;
            return (
              <li
                key={track.id}
                className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => handlePlay(track, index)}
              >
                <Image
                  src={track.album.cover_medium}
                  alt={track.title}
                  width={150}
                  height={150}
                  className="mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg">{track.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {track.artist.name}
                </p>
              </li>
            );
          } else if (selectedType === "album") {
            const album = item as Album;
            return (
              <li
                key={album.id}
                className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => router.push(`/album/${album.id}`)}
              >
                <Image
                  src={album.cover_medium}
                  alt={album.title}
                  width={150}
                  height={150}
                  className="mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg">{album.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {album.artist.name}
                </p>
              </li>
            );
          } else if (selectedType === "artist") {
            const artist = item as Artist;
            return (
              <li
                key={artist.id}
                className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => router.push(`/artist/${artist.id}`)}
              >
                <Image
                  src={artist.picture_medium}
                  alt={artist.name}
                  width={150}
                  height={150}
                  className="mb-4 rounded-full"
                />
                <h3 className="font-semibold text-lg">{artist.name}</h3>
              </li>
            );
          } else if (selectedType === "playlist") {
            const playlist = item as Playlist;
            return (
              <li
                key={playlist.id}
                className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => router.push(`/playlist/${playlist.id}`)}
              >
                <Image
                  src={playlist.picture_medium}
                  alt={playlist.title}
                  width={150}
                  height={150}
                  className="mb-4 rounded-lg"
                />
                <h3 className="max-w-full font-semibold text-lg truncate">
                  {playlist.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {playlist.user.name}
                </p>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
}
