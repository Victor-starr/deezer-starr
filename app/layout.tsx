import type { Metadata } from "next";
import { Geist, Geist_Mono, PT_Serif_Caption } from "next/font/google";
import MusicPlayerProvider from "./context/MusicPlayerProvider";
import Navigation from "./components/Nav";
import MusicPlayer from "./components/MusicPlayer";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerifCaption = PT_Serif_Caption({
  variable: "--font-pt-serif-caption",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deezer Starr",
  description:
    "A simple music player app to explore playlists, artists, albums, and tracks.",
  authors: [{ name: "Deezer Starr Team" }],
  keywords: [
    "Deezer",
    "music",
    "playlists",
    "artists",
    "albums",
    "tracks",
    "music player",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerifCaption.variable} antialiased font-oi`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <MusicPlayerProvider>
            <Navigation />
            {children}
            <MusicPlayer />
          </MusicPlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
