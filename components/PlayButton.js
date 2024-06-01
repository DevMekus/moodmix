"use client";

const PlayButton = ({ size, handlePlayClicked }) => {
  return (
    <>
      <div className={`play-wrap ${size} pointer`} onClick={handlePlayClicked}>
        <span class="material-symbols-outlined icon">play_arrow</span>
      </div>
    </>
  );
};

export default PlayButton;
