import { fetchDeezerChartData } from "@/lib/deezerServices";
import Playlists from "./components/_Playlists";
import Artists from "./components/_Artists";
import TrackList from "./components/_TracksList";
import { Chart } from "@/lib/types";
import Albums from "./components/_Albums";

async function HomePage() {
  const { playlists, artists, albums, tracks } =
    (await fetchDeezerChartData()) as Chart;

  return (
    <main className="flex flex-col items-center px-5 pt-8 pb-25 h-full">
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Playlists</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-85 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {playlists.map((playlist) => (
            <Playlists key={playlist.id} {...playlist} />
          ))}
        </ul>
      </section>

      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Artists</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {artists.map((artist) => (
            <Artists key={artist.id} {...artist} />
          ))}
        </ul>
      </section>

      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Most Streamed Albums</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-80 overflow-x-auto whitespace-nowrap custom-scrollbar">
          {albums.map((album) => (
            <Albums key={album.id} {...album} />
          ))}
        </ul>
      </section>

      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Tracks</h1>
        <table className="mt-5 px-4 w-full">
          <tbody className="flex flex-col overflow-y-auto custom-scrollbar">
            <TrackList tracks={tracks} />
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default HomePage;
