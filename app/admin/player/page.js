"use client";

import PlayerBar from "@/components/PlayerBar";
import AlbumCard from "@/components/AlbumCard";
import AudioPlayer from "@/components/AudioPlayer";
import musicData from "@/lib/musics";
import { useState } from "react";

const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
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
        <PlayerBar />
      </div>
    </>
  );
};

export default page;
