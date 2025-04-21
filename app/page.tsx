import { Suspense } from "react";
import ArtistsSection, { ArtistLoader } from "./components/_ArtistsSection";
import AlbumsSection, { AlbumsLoader } from "./components/_AlbumsSection";
import PlaylistsSection, {
  PlaylistsLoader,
} from "./components/_PlaylistsSection";
import TrackSection, { TrackListLoader } from "./components/_TrackSection";

function HomePage() {
  return (
    <main className="flex flex-col items-center px-5 pt-8 pb-25 h-full">
      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Playlists</h1>
        <Suspense fallback={<PlaylistsLoader />}>
          <PlaylistsSection />
        </Suspense>
      </section>

      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Artists</h1>
        <Suspense fallback={<ArtistLoader />}>
          <ArtistsSection />
        </Suspense>
      </section>

      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Most Streamed Albums</h1>
        <Suspense fallback={<AlbumsLoader />}>
          <AlbumsSection />
        </Suspense>
      </section>

      <section className="py-8 w-[60%]">
        <h1 className="text-5xl">Popular Tracks</h1>
        <Suspense fallback={<TrackListLoader />}>
          <TrackSection />
        </Suspense>
      </section>
    </main>
  );
}

export default HomePage;
