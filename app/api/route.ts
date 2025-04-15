import axios from "axios";
import { NextResponse } from "next/server";

const limit = 30;
const baseUrl = "https://api.deezer.com";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    limit: limit,
  },
});

export async function GET() {
  try {
    const [popularPlaylists, popularArtists, popularAlbums, popularTracks] =
      await Promise.all([
        api.get(`/chart/0/playlists`),
        api.get(`/chart/0/artists`),
        api.get(`/chart/0/albums`),
        api.get(`/chart/0/tracks`),
      ]);

    return NextResponse.json({
      playlists: popularPlaylists.data.data,
      artists: popularArtists.data.data,
      albums: popularAlbums.data.data,
      tracks: popularTracks.data.data,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
