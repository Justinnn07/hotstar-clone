import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Media from "./Media";
import MediaCard from "./MediaCard";
import Slides from "./Slides";

const App = () => {
  const [mediaCard, setMediaCard] = useState([]);
  const [media, setMedia] = useState([]);
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      setMovies(snapshot.docs.map((doc) => doc.data()));
    });
     db.collection("shows").onSnapshot((snapshot) => {
      setShows(snapshot.docs.map((doc) => doc.data()));
    });
     db.collection("media-card").onSnapshot((snapshot) => {
      setMedia(snapshot.docs.map((doc) => doc.data()));
    });
    db.collection("media").onSnapshot((snapshot) => {
      setMediaCard(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Slides />
      <div className="continuewatch">
        <span>Continue Watching</span>
        <div className="flex-continue">
          {mediaCard.map((media) => (
            <MediaCard img={media.img} />
          ))}
        </div>
      </div>
      <div className="continuewatch">
        <span>Specials & Latest Movies</span>
        <div className="flex-continue">
          {media.map((media) => (
            <Media img={media.img} />
          ))}
        </div>
      </div>
      <div className="continuewatch">
        <span>Shows Recommended For You</span>
        <div className="flex-continue">
          {shows.map((shows) => (
            <Media img={shows.img} />
          ))}
        </div>
      </div>
      <div className="continuewatch">
        <span>Movies Recommended For You</span>
        <div className="flex-continue">
          {movies.map((movies) => (
            <Media img={movies.img} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
