// Mplay.jsx
import React from 'react';
import { useParams} from 'react-router-dom';
import "./movieplayer.css"

const Mplay = ({ details }) => {
  const { id } = useParams();

 

  return (
    <>
      <div className="movie-play-container">
        <h2 className="movie-title">{details.title || details.name}</h2>
        <div className="video-player">
          {/* Replace the video source with the appropriate one for Mplay */}
          <iframe
            title={details.title || details.name}
            src="https://www.youtube.com/embed/your-mplay-video-id"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button onClick={goAgain}>Complete Watching</button>
    </>
  );
};

export default Mplay;
