import React from 'react';
import "./movieplayer.css"
const Movieplay = ({ details }) => {
  // Replace these placeholder values with actual details

  return (
    <div className="movie-play-container">
      <h2 className="movie-title">{details.title||details.name}</h2>
      <div className="video-player">
        <iframe
          title={details.title||details.name}
          src="https://youtu.be/502xhwUiGTs?list=RD502xhwUiGTs"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Movieplay;
