import React from "react";
import "./Slides.css";

const Slides = () => {
  return (
    <div className="slides">
      <div className="text">
        <span>Criminal Justice : Behind Closed Doors</span>
        <p className="hot-spec">Hotstar Specials · Crime </p>
        <h6 className="desc">
          Aditya is a cab driver who has a one-night stand with his passenger
          Sanaya. When he wakes up, Sanaya is murdered. He finds himself in a
          pool of her blood, and Sanaya has multiple stab wounds. He leaves the
          crime scene, but meets with an accident and is taken to the police
          station. Initially, Madhav Mishra is interested in taking the case but
          later on Mandira Mathur takes the case. While she is successful in
          getting Aditya freed from charge of a rape, she fails to acquit him
          form the murder charge. His lawyer Nikhat Hussain along with Madhav
          Mishra , also tries to save him.
        </h6>
      </div>
      <div className="images">
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1372/871372-h"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slides;
