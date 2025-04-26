import TrackList from "@/app/components/_TracksList";
import { fetchDeezerOnePlaylist } from "@/lib/deezerServices";
import { Playlist } from "@/lib/types";
import PlaylistHeader from "./PlaylistHeader";

export default async function PlaylistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const playlist: Playlist = await fetchDeezerOnePlaylist(id);
  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 pt-8 pb-25 w-screen h-full text-gray-800 dark:text-gray-200">
      <PlaylistHeader playlist={playlist} />
      <article className="mt-8 w-full max-w-4xl">
        <h2 className="mb-4 font-semibold text-2xl text-center">Tracks List</h2>
        <table className="bg-white dark:bg-gray-800 shadow-md rounded-lg w-full">
          <tbody>
            <TrackList tracks={playlist.tracks.data} />
          </tbody>
        </table>
      </article>
    </main>
  );
}
