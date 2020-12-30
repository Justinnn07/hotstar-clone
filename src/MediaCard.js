import React from "react";
import "./MediaCard.css";

const MediaCard = ({ img, yes }) => {
  return (
    <div className="mediaCard">
      <img src={img} alt="" style={{ borderBottom: "4px solid #1f80e0" }} />
    </div>
  );
};

export default MediaCard;
