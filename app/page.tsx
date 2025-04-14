import Artists from "./components/_Artists";
import Paylists from "./components/_Paylists";
import ALbums from "./components/_ALbums";
import TrackList from "./components/_TacksList";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-8 pb-25 h-full">
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Paylists</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-75 overflow-x-auto whitespace-nowrap custom-scrollbar">
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
          <Paylists />
        </ul>
      </section>
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Artists</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-75 overflow-x-auto whitespace-nowrap custom-scrollbar">
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
          <Artists />
        </ul>
      </section>
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Most Streamed Albums</h1>
        <ul className="flex flex-row items-center gap-5 mt-5 px-4 h-75 overflow-x-auto whitespace-nowrap custom-scrollbar">
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
          <ALbums />
        </ul>
      </section>
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular tracks</h1>
        <table className="mt-5 px-4 w-full">
          <tbody className="flex flex-col overflow-y-auto custom-scrollbar">
            <TrackList />
            <TrackList />
            <TrackList />
            <TrackList />
          </tbody>
        </table>
      </section>
    </main>
  );
}
