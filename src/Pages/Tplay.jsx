import React from "react";
import { useParams } from "react-router-dom";
import "./movieplayer.css";

const Movieplay = ({ details, onComplete,media_type}) => {
  const { id } = useParams();
  const goAgain = () => {
    // Call the onComplete callback passed from Details
    onComplete();
    // Redirect back to Details
  
  };
  {console.log("yo cahi movie play hai ta ",details)}

  return (
    <>
      <div className="movie-play-container">
        <h2 className="movie-title">trailer ${id}</h2>
        <div className="video-player">
          <iframe
            title={details.title || details.name}
            src="https://www.youtube.com/embed/502xhwUiGTs?list=RD502xhwUiGTs"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Movieplay;
