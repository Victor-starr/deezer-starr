import { fetchDeezerOneArtist } from "@/lib/deezerServices";
import { Album, Artist, Track, Playlist } from "@/lib/types";
import ArtistTabs from "./ArtistTab";

interface DeezerOneArtistResponse {
  artist: Artist;
  albums: Album[];
  playlists: Playlist[];
  tracks: Track[];
  relArtist: Artist[];
}

export default async function ArtistPage(params: { params: { id: string } }) {
  const {
    artist,
    albums,
    playlists,
    tracks,
    relArtist,
  }: DeezerOneArtistResponse = await fetchDeezerOneArtist(params.params.id);

  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 px-5 pt-8 pb-25 h-full text-gray-800 dark:text-gray-200">
      <header
        style={{ backgroundImage: `url(${artist.picture_xl})` }}
        className="flex flex-col justify-center items-center bg-cover bg-center shadow-lg w-full h-[300px]"
      >
        <h1 className="drop-shadow-md font-bold text-white text-4xl">
          {artist.name}
        </h1>
        <span className="flex flex-col items-center mt-2">
          <p className="text-gray-200 text-lg">{artist.nb_fan} fans</p>
          <button className="bg-sky-500 hover:bg-sky-700 shadow-md mt-2 px-4 py-2 rounded-full font-medium text-white">
            Listen
          </button>
        </span>
      </header>

      {/* Pass data to client-side tab component */}
      <ArtistTabs
        tracks={tracks}
        playlists={playlists}
        albums={albums}
        relArtist={relArtist}
      />
    </main>
  );
}
