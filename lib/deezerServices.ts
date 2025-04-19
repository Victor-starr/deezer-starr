import api from "@/lib/api";

export async function fetchDeezerPlaylists() {
  const response = await api.get(`/chart/0/playlists`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}
export async function fetchDeezerArtists() {
  const response = await api.get(`/chart/0/artists`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}

export async function fetchDeezerAlbums() {
  const response = await api.get(`/chart/0/albums`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}

export async function fetchDeezerTracks() {
  const response = await api.get(`/chart/0/tracks`);

  if (process.env.NEXT_PUBLIC_API_DELAY === "true") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return response.data.data;
}
