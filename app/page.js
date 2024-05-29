"use client";
import React from "react";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";
import RightPanel from "@/components/RightPanel";
import PlaylistCard from "@/components/PlaylistCard";
import Hero from "@/components/Hero";
import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";
import playlistData from "@/lib/playlists";
import { setMusicPlay } from "@/lib/library";
import { useState } from "react";
import { homeUrl } from "@/lib/navigations";

const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <TopNav />
      <main className="main-container">
        <Sidebar links={homeUrl} />
        <div className="app-inner-flex">
          <div className="app-inner">
            <Hero />
            <div className="home-page-flex">
              <div className="content-list padding-20">
                <h4 className="bold">What’s New</h4>
                <div className="album-display">
                  {musicData.map((music) => (
                    <div key={music.id}>
                      <AlbumCard data={music} />
                    </div>
                  ))}
                </div>

                <section className="playlist-chart">
                  <h4 className="bold">Album & Playlists</h4>
                  <div className="playlist-flex mt-30">
                    {playlistData.map((playlist) => (
                      <div key={playlist.id}>
                        <PlaylistCard data={playlist} />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="right-panels">
                <RightPanel />
              </div>
            </div>
          </div>
        </div>
        {/* <PlayerBar /> */}
      </main>
    </>
  );
};

export default page;
