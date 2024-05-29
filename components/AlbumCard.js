import LikeButton from "@/components/LikeButton";
import Link from "next/link";

const AlbumCard = ({ data, albumOnly = false }) => {
  return (
    <>
      <div className="album-container">
        <Link className="no-decoration" href="/music-detail">
          <div
            className="album album_"
            style={{
              backgroundImage: `url(${data.imageUrl})`,
            }}
          >
            <div className="icon-wrap">
              {/* <PlayButton size="medium-play play-circle" /> */}
            </div>
          </div>
        </Link>
        <div className="album-info">
          <div className="mt-10 f-width flex space-between align-center">
            <span className="album-name">{data.AlbumName}</span>
            <LikeButton />
          </div>
          <div className={`${albumOnly ? "hidden" : ""}`}>
            <span className="music-name">
              {data.musicName} <i className="fas fa-music icon-sm"></i>
            </span>

            <div className="f-width flex space-between align-center">
              <div>
                <span className="fas fa-star color-grey"></span>
                <span className="fas fa-star color-grey"></span>
                <span className="fas fa-star color-grey"></span>
              </div>
              <span className="bold">{data.downloads} Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
