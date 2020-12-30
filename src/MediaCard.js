import React from "react";
import "./MediaCard.css";

const MediaCard = ({ img }) => {
  return (
    <div className="mediaCard">
      <img src={img} alt="" />
    </div>
  );
};

export default MediaCard;
