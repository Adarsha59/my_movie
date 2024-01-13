import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tplay from "./Tplay";
import Mplay from "./Mplay";
import "./movieplayer.css";
const MoviesDetail = ({ details, mediaType, onPlayClick }) => {
  const background = `https://image.tmdb.org/t/p/original/${details.poster_path}`;

  const [seasonNumber, setSeasonNumber] = useState(1);
  const [episodeNumber, setEpisodeNumber] = useState(1);

  const handleSeasonChange = (e) => {
    const seasonValue = parseInt(e.target.value, 10);
    if (!isNaN(seasonValue) && seasonValue > 0) {
      setSeasonNumber(seasonValue);
    }
  };

  const handleEpisodeChange = (e) => {
    const episodeValue = parseInt(e.target.value, 10);
    if (!isNaN(episodeValue) && episodeValue > 0) {
      setEpisodeNumber(episodeValue);
    }
  };
  //  videoURL = `https://multiembed.mov/directstream.php?video_id=${details.id}&tmdb=${seasonNumber}_${episodeNumber}`;

  const Navigate = useNavigate();
  const trailerContainerRef = useRef(null);
  const movieContainerRef = useRef(null);
  {
    console.log("medaitype", details.id);
  }
  const tHere = () => {
    // Scroll to the trailer container
    if (trailerContainerRef.current) {
      trailerContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mHere = () => {
    // Scroll to the movie container
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  let videoURL = "";
  let videoURL1 = "";
  let videoURL2 = "";

  // player 1
  switch (mediaType) {
    case "movie":
      videoURL = `https://www.2embed.cc/embedtvfull/${details.id}`;
      break;

    case "tv":
      // videoURL = ` https://multiembed.mov/se_player.php?video_id=${details.id}&tmdb=1&s=1&e=2`;
      videoURL = `https://www.2embed.cc/embedtvfull/${details.id}`;
      break;

    default:
      videoURL = ` https://embed.smashystream.com/playere.php?tmdb=${details.id}`;
      break;
  }

  // player 2
  switch (mediaType) {
    case "movie":
      videoURL1 = ` https://embed.smashystream.com/playere.php?tmdb=${details.id}`;

      break;

    case "tv":
      https: videoURL1 = `   https://embed.smashystream.com/playere.php?tmdb=${details.id}&season=${seasonNumber}&episode=${episodeNumber}`;
      break;

    default:
      videoURL1 = `https://www.2embed.cc/embedtvfull/${details.id}`;

      break;
  }

  // play 3
  switch (mediaType) {
    case "movie":
      videoURL2 = ` https://multiembed.mov/directstream.php?video_id=${details.id}&tmdb=1`;

      break;

    case "tv":
      // videoURL2 = ` https://multiembed.mov/se_player.php?video_id=${details.id}&tmdb=1&s=1&e=2`;
      https: videoURL2 = ` https://multiembed.mov/directstream.php?video_id=${details.id}&tmdb=1&s=${seasonNumber}&e=${episodeNumber}`;

      break;

    default:
      videoURL2 = `https://www.2embed.cc/embedtvfull/${details.id}`;

      break;
  }
  {
    console.log("video ", videoURL2);
  }

  //   const videoURL1 = ` https://embed.smashystream.com/playere.php?tmdb=${id}`;

  //   const videoURL2 = ` https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`||
  //  ` https://multiembed.mov/se_player.php?video_id=${id}&tmdb=1&s=1&e=2`;
  //   // https://multiembed.mov/se_player.php?video_id=60625&tmdb=1&s=5&e=5

  return (
    <>
      <section
        style={{
          position: "relative",
          background: `url("${background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          // paddingTop: "160px",
          paddingBottom: "var(--section-padding)",
          // filter: "brightness(40%) opacity(0.8)", // Adjust opacity as needed
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <section className="movie-detail">
          <div className="container">
            <figure className="movie-detail-banner">
              <img
                src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                alt={`${details.original_name || details.title} movie poster`}
              />
              <button className="play-btn" onClick={tHere}>
                <ion-icon name="play-circle-outline"></ion-icon>
              </button>
            </figure>

            <div className="movie-detail-content">
              <h1 className="h1 detail-title">
                <strong>{details.original_name || details.title}</strong>
              </h1>

              <div className="meta-wrapper">
                <div className="badge-wrapper">
                  <div className="badge badge-fill">PG 13</div>

                  <div className="badge badge-outline">HD</div>
                </div>

                <div className="ganre-wrapper">
                  {details.genres &&
                    details.genres.map((genre) => (
                      <a key={genre.id} href="#">
                        {genre.name},
                      </a>
                    ))}
                </div>

                <div className="date-time">
                  <div>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time dateTime="2021">
                      {" "}
                      {details.release_date
                        ? dayjs(details.release_date).format("MMM DD YYYY")
                        : details.last_air_date
                        ? dayjs(details.last_air_date).format("MMM DD YYYY")
                        : "Date Not Available"}
                    </time>
                  </div>

                  <div>
                    <ion-icon name="time-outline"></ion-icon>

                    <time dateTime="PT115M">115 min</time>
                  </div>
                </div>
              </div>

              <p className="storyline">{details.overview}</p>

              <div className="details-actions">
                <button className="share">
                  <ion-icon name="share-social"></ion-icon>

                  <span>Share</span>
                </button>

                <div className="title-wrapper">
                  <p className="title">Prime Video</p>

                  <p className="text">{details.tagline}</p>
                </div>

                <button className="btn btn-primary" onClick={mHere}>
                  <ion-icon name="play"></ion-icon>

                  <span>Watch Now</span>
                </button>
              </div>

              <a
                href="src/Pages/assets/images/movie-4.png"
                download
                className="download-btn"
              >
                <span>Download</span>

                <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>
          </div>
        </section>
      </section>
      <div className="space"></div>

      <div ref={movieContainerRef} className="movie-play-container">
        <h2 className="movie-title">
          Player 1 : {details.title || details.name}
        </h2>
        <div className="video-player">
          {/* Replace the video source with the appropriate one for Mplay */}
          <iframe
            title={details.title || details.name}
            // src="https://www.youtube.com/embed/your-mplay-video-id"
            src={videoURL}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="space"></div>

      <div ref={movieContainerRef} className="movie-play-container">
        <h2 className="movie-title">
          Player 2 : {details.title || details.name}
        </h2>
        <div className="video-player">
          {/* Replace the video source with the appropriate one for Mplay */}
          <iframe
            title={details.title || details.name}
            // src="https://www.youtube.com/embed/your-mplay-video-id"
            src={videoURL1}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="space"></div>
      <h1 className="textt">For series</h1>

      {/* Input fields for season and episode numbers */}
      <div className="input-container">
        <label className="textt">Season:</label>
        <input
          type="number"
          value={seasonNumber}
          onChange={handleSeasonChange}
          className="season-input"
        />

        <label className="textt">Episode:</label>
        <input
          type="number"
          value={episodeNumber}
          onChange={handleEpisodeChange}
          className="episode-input"
        />
      </div>

      <div className="space"></div>
      <div ref={movieContainerRef} className="movie-play-container">
        <h2 className="movie-title">
          Player 3 : {details.title || details.name}
        </h2>
        <div className="video-player">
          {/* Replace the video source with the appropriate one for Mplay */}
          <iframe
            title={details.title || details.name}
            // src="https://www.youtube.com/embed/your-mplay-video-id"
            src={videoURL2}
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

export default MoviesDetail;
