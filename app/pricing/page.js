"use client";
import React from "react";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";
import Link from "next/link";
import PlayButton from "@/components/PlayButton";
import musicData from "@/lib/musics";
import playlistData from "@/lib/playlists";
import { useState } from "react";
import AlbumCard from "@/components/AlbumCard";
import { homeUrl } from "@/lib/navigations";

const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  function handlePlayClicked(isPlaying) {
    setIsPlaying(!isPlaying);
  }
  return (
    <>
      <TopNav />
      <main className="main-container">
        <Sidebar links={homeUrl} />
        <div className="app-inner-flex">
          <div className="app-inner">
            <div className="album-vh">
              <div className="container">
                <h1>Pricing</h1>
              </div>
            </div>
            <div className="mt-30">
              <div className="container">
                <h1 className="bold"> Jack Keys</h1>
                <p className="text mt-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
