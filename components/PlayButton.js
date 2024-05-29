"use client";

import PlayerBar from "@/components/PlayerBar";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PlayButton = ({ size, handlePlayClicked }) => {
  const router = useRouter();

  function handlePlayTrack() {
    router.push("/player?id=4537754");
  }
  return (
    <>
      <div className={`play-wrap ${size} pointer`} onClick={handlePlayTrack}>
        <span class="material-symbols-outlined icon">play_arrow</span>
      </div>
    </>
  );
};

export default PlayButton;
