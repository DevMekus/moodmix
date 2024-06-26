"use client";

import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";

const Page = () => {
  return (
    <>
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
    </>
  );
};

export default Page;
