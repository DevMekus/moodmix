import React from "react";

const AudioPlayer = ({ file }) => {
  return (
    <>
      <div className="audioPlayer">
        <h5 className="bold">
          Helping Your <p>By Shania Twain</p>
        </h5>
        <p>
          This is how I want it <i className="fas fa-music color-green"></i>
        </p>

        <audio controls>
          <source src={`music/${file}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};

export default AudioPlayer;
