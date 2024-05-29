import LikeButton from "./LikeButton";

const PlaylistCard = ({ data }) => {
  return (
    <>
      <div className="play-list-card">
        <div className="album-div">
          <div
            className="album-cover"
            style={{
              backgroundImage: `url(${data.imageUrl})`,
            }}
          ></div>
          <div className="album-info">
            <span className="album-name">{data.AlbumName}</span>

            <br />
            <span className="music-name">
              {data.musicName} <i className="fas fa-music"></i>
            </span>
          </div>
        </div>
        <div className="stats-div">
          <span>{data.playBack}</span>
          <span>
            <i className="fas fa-play"></i> {data.playNumber}
          </span>
          <LikeButton count={data.favorites} />
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
