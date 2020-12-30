import React from "react";
import "./Media.css";

const Media = ({ img }) => {
  return (
    <div className="media">
      <img src={img} alt="" />
    </div>
  );
};

export default Media;
