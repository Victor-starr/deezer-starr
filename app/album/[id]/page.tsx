import TrackList from "@/app/components/_TracksList";
import { FetchDeezerOneAlbum } from "@/lib/deezerServices";
import { Album } from "@/lib/types";
import AlbumHeader from "./AlbumHeader";
export default async function AlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album: Album = await FetchDeezerOneAlbum(id);
  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 pt-8 pb-25 min-h-screen text-gray-800 dark:text-gray-200">
      <AlbumHeader album={album} />
      <article className="mt-8 w-full max-w-4xl">
        <h2 className="mb-4 font-semibold text-2xl text-center">Tracks List</h2>
        <table className="bg-white dark:bg-gray-800 shadow-md rounded-lg w-full">
          <tbody>
            <TrackList tracks={album.tracks.data} />
          </tbody>
        </table>
      </article>
    </main>
  );
}
