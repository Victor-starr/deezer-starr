import { Suspense } from "react";
import Head from "next/head";
import ArtistsSection, { ArtistLoader } from "./components/_ArtistsSection";
import AlbumsSection, { AlbumsLoader } from "./components/_AlbumsSection";
import PlaylistsSection, { PlaylistsLoader } from "./components/_PlaylistsSection";
import TrackSection, { TrackListLoader } from "./components/_TrackSection";

function HomePage() {
  return (
    <>
      <Head>
        <title>Deezer Starr - Discover Music</title>
        <meta name="description" content="Explore popular playlists, artists, albums, and tracks with Deezer Starr. Listen to 30-second previews of your favorite music." />
        <meta name="keywords" content="Deezer, music, playlists, artists, albums, tracks, music player" />
        <meta name="author" content="Deezer Starr Team" />
      </Head>
      <main className="flex flex-col items-center px-5 pt-8 pb-25 w-screen h-full">
        <section className="py-8 w-[90%] md:w-[60%]">
          <h1 className="text-2xl md:text-5xl">Popular Playlists</h1>
          <Suspense fallback={<PlaylistsLoader />}>
            <PlaylistsSection />
          </Suspense>
        </section>

        <section className="py-8 w-[90%] md:w-[60%]">
          <h1 className="text-2xl md:text-5xl">Popular Artists</h1>
          <Suspense fallback={<ArtistLoader />}>
            <ArtistsSection />
          </Suspense>
        </section>

        <section className="py-8 w-[90%] md:w-[60%]">
          <h1 className="text-2xl md:text-5xl">Most Streamed Albums</h1>
          <Suspense fallback={<AlbumsLoader />}>
            <AlbumsSection />
          </Suspense>
        </section>

        <section className="py-8 pb-25 w-full md:w-[60%]">
          <h1 className="text-2xl md:text-5xl">Popular Tracks</h1>
          <Suspense fallback={<TrackListLoader />}>
            <TrackSection />
          </Suspense>
        </section>
      </main>
    </>
  );
}

export default HomePage;
