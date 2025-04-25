import api from "@/lib/api";

export async function fetchDeezerPlaylists() {
  const response = await api.get(`/chart/0/playlists?limit=30`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}
export async function fetchDeezerArtists() {
  const response = await api.get(`/chart/0/artists?limit=30`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}

export async function fetchDeezerAlbums() {
  const response = await api.get(`/chart/0/albums?limit=30`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}

export async function fetchDeezerTracks() {
  const response = await api.get(`/chart/0/tracks?limit=30`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}

export async function fetchDeezerOneArtist(id: string) {
  const [artist, albums, playlist, topTracks, relatedArtists] =
    await Promise.all([
      api.get(`/artist/${id}`),
      api.get(`/artist/${id}/albums?limit=20`),
      api.get(`/artist/${id}/playlists?limit=20`),
      api.get(`/artist/${id}/top?limit=30`),
      api.get(`/artist/${id}/related?limit=15`),
    ]);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return {
    artist: artist.data,
    albums: albums.data.data,
    playlists: playlist.data.data,
    tracks: topTracks.data.data,
    relArtist: relatedArtists.data.data,
  };
}
