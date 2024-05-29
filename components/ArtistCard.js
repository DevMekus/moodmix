import React from "react";

const ArtistCard = () => {
  return (
    <>
      <div className="artist-card">
        <div className="image-wrapper"></div>
        <div>
          <span className="artist-name">Celine Dion</span>
          <div className="info-div"></div>
          <button className="bt bt-success bt-pill">Follow</button>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
