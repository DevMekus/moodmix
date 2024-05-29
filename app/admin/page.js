"use client";
import React from "react";
import SecureTop from "@/components/SecureTop";
import Sidebar from "@/components/Sidebar";
import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";
import { setMusicPlay } from "@/lib/library";
import { useState } from "react";
import { adminUrl } from "@/lib/navigations";

const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <SecureTop />
      <main className="main-container">
        <Sidebar links={adminUrl} />
        <div className="app-inner-flex">
          <div className="app-inner">
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
              </div>
              <div className="right-panels"></div>
            </div>
          </div>
        </div>
        {/* <PlayerBar /> */}
      </main>
    </>
  );
};

export default page;
