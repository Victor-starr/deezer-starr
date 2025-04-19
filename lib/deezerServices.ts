import api from "@/lib/api";

export async function fetchDeezerChartData() {
  const [playlists, artists, albums, tracks] = await Promise.all([
    api.get(`/chart/0/playlists`),
    api.get(`/chart/0/artists`),
    api.get(`/chart/0/albums`),
    api.get(`/chart/0/tracks`),
  ]);

  return {
    playlists: playlists.data.data,
    artists: artists.data.data,
    albums: albums.data.data,
    tracks: tracks.data.data,
  };
}
