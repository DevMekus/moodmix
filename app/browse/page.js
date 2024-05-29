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
            <div className="home-page-flex">
              <div className="content-list padding-20">
                <div className="flex gap-10 align-center">
                  <h3>Find your Favourite</h3>
                  <select className="mood-filter">
                    <option>All songs</option>
                    <option>Happy</option>
                    <option>Sad</option>
                    <option>Excited</option>
                    <option>Pondering</option>
                  </select>
                </div>
                <div className="album-display mt-30">
                  {musicData.map((music) => (
                    <div key={music.id}>
                      <AlbumCard data={music} />
                    </div>
                  ))}
                </div>

                <section className="playlist-chart">
                  <h3>Album & Playlists</h3>
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
        {isPlaying && <PlayerBar />}
      </main>
    </>
  );
};

export default page;
