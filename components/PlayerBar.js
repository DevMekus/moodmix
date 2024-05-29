import React from "react";

const PlayerBar = () => {
  return (
    <>
      <div className="player-control">
        <div className="inner-display">
          <div className="controls">
            <span class="material-symbols-outlined icon">skip_previous</span>
            <span class="material-symbols-outlined icon play-btn">
              play_arrow
            </span>
            <span class="material-symbols-outlined icon">skip_next</span>
            <span class="material-symbols-outlined icon">shuffle</span>
            <div className="progress-div">
              <span className="timer">00:00</span>
              <div className="progress"></div>
              <span className="timer">00:00</span>
            </div>
            <span class="material-symbols-outlined icon">volume_up</span>
            <span class="material-symbols-outlined icon">settings</span>
          </div>
          <div className="now-playing-w">
            <div className="now-playing">
              <div className="album-thumbnail"></div>
              <div className="title">
                <h5 className="album-name">Transparency</h5>
                <span className="trackname">Atmospheric Lights</span>
              </div>
            </div>
            <div className="actions">
              <span class="material-symbols-outlined icon">favorite</span>
              <span class="material-symbols-outlined icon">
                format_list_bulleted
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerBar;
