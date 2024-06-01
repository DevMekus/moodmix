"use client";

import PlaylistCard from "@/components/PlaylistCard";

import AlbumCard from "@/components/AlbumCard";
import musicData from "@/lib/musics";
import playlistData from "@/lib/playlists";

const page = () => {
  return (
    <>
      <div className="content-list padding-20">
        <div className="">
          <h3 className="card-title">Find your Favorite</h3>
          <div className="mt-10">
            <label>Select your music</label>
            <div className="row">
              <div className="col-sm-3">
                <select className="mood-filter form-control">
                  <option>All songs</option>
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Excited</option>
                  <option>Pondering</option>
                </select>
              </div>
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Music title"
                />
              </div>
            </div>
          </div>
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
    </>
  );
};

export default page;
