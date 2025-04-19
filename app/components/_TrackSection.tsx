import { fetchDeezerTracks } from "@/lib/deezerServices";
import TrackList from "./_TracksList";

export default async function TrackSection() {
  const tracks = await fetchDeezerTracks();

  return (
    <table className="mt-5 px-4 w-full">
      <tbody className="flex flex-col overflow-y-auto custom-scrollbar">
        <TrackList tracks={tracks} />
      </tbody>
    </table>
  );
}
export function TrackListLoader() {
  return (
    <div className="mt-5 px-4 w-full">
      <div className="flex flex-col overflow-y-auto custom-scrollbar">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-row justify-between items-center shadow-md p-4 border-gray-500 border-b"
          >
            <div className="flex-1">
              <div className="bg-gray-400 dark:bg-gray-200 rounded-md w-[50px] h-[50px] animate-pulse"></div>
            </div>
            <div className="flex-1 px-2">
              <div className="bg-gray-400 dark:bg-gray-200 rounded-md w-[120px] h-[20px] animate-pulse"></div>
            </div>
            <div className="flex-1 px-2">
              <div className="bg-gray-400 dark:bg-gray-200 rounded-md w-[100px] h-[20px] animate-pulse"></div>
            </div>
            <div className="flex-1 px-2 text-center">
              <div className="bg-gray-400 dark:bg-gray-200 rounded-md w-[50px] h-[20px] animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
