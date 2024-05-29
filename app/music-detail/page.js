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
import LikeButton from "@/components/LikeButton";

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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="album-flex">
                      <div
                        className="temp-album album-big"
                        style={{
                          backgroundImage: `url(${playlistData[1].imageUrl})`,
                        }}
                      ></div>
                      <div className="album-info">
                        <h1 className="album-name">Moonrise</h1>
                        <h2 className="music-name">
                          Oh & the Joy <i className="fas fa-music ml-10"></i>
                        </h2>
                        <div className="info-bottom">
                          <div className="flex align-center gap-10">
                            <PlayButton
                              size="mini-play play-circle"
                              track="Miracle"
                              handlePlayClicked={handlePlayClicked}
                            />
                            <span>416</span>
                          </div>
                          <LikeButton count={6} />
                          <button className="btn btn-sm btn-light">
                            <span className="fas fa-ellipsis-v"></span>
                          </button>
                          <div className="drop-menu"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="bold">Music tracks</h4>
                    <div className="track-wrapper">
                      <Link href="/player" className="no-decoration">
                        <p className="pointer">
                          Oh & the Joy{" "}
                          <i className="fas fa-music ml-10 color-green"></i>
                        </p>
                      </Link>
                      <Link href="/player" className="no-decoration">
                        <p className="pointer">Singles Love</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-30">
              <div className="container">
                <Link href="/artist">
                  <h1 className="bold"> Jack Keys</h1>
                </Link>
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
            <section className="playlist-chart padding-20">
              <div className="container">
                <h4 className="bold">More from Jack Keys</h4>
                <div className="mt-30">
                  <div className="f-width flex gap-10">
                    {playlistData.map((playlist) => (
                      <div key={playlist.id}>
                        <AlbumCard
                          size="album-mini"
                          albumOnly={true}
                          data={playlist}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {isPlaying && <PlayerBar />}
      </main>
    </>
  );
};

export default page;
