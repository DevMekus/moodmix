"use client";
import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";

const page = () => {
  return (
    <>
      <div className="content-list padding-20">
        <h4 className="bold">What’s New</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="album-display mt-10">
          {musicData.map((music) => (
            <div key={music.id}>
              <AlbumCard data={music} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
