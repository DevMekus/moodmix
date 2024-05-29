"use client";
import React from "react";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import AudioPlayer from "@/components/AudioPlayer";
import RightPanel from "@/components/RightPanel";
import PlaylistCard from "@/components/PlaylistCard";
import PlayerBar from "@/components/PlayerBar";
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
            <div className="player-window">
              <h5>Now Playing...</h5>
              <AudioPlayer />
            </div>
            <div className="home-page-flex">
              <div className="content-list padding-20">
                <h4 className="bold">Also By Shania Twain</h4>
                <div className="album-display">
                  {musicData.map((music) => (
                    <div key={music.id}>
                      <AlbumCard data={music} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="right-panels">{/* <RightPanel /> */}</div>
            </div>
          </div>
        </div>
        <PlayerBar />
      </main>
    </>
  );
};

export default page;
