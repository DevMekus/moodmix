import React from "react";

const LikeButton = ({ size, track, count = 0 }) => {
  function handleClick() {
    alert("Item liked");
  }
  return (
    <>
      <button className="btn btn-sm btn-light" onClick={handleClick}>
        <i className="fas fa-heart"></i> {`${count > 0 ? count : ""}`}
      </button>
    </>
  );
};

export default LikeButton;
