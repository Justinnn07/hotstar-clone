import React from "react";
import "./App.css";
import Header from "./Header";
import MediaCard from "./MediaCard";
import Slides from "./Slides";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Slides />
      <div className="continuewatch">
        <span>Continue Watching</span>
        <div className="flex-continue">
          <MediaCard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/8522/1000118522/1000118522-h" />
          <MediaCard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/308/1000040308/1000040308-h" />
          <MediaCard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
          <MediaCard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5452/245452-h" />
        </div>
      </div>
    </div>
  );
};

export default App;
