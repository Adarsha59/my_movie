import dayjs from "dayjs";
import React, { useState } from "react";
const MoviesDetail = ({ details }) => {
  const background = `https://image.tmdb.org/t/p/original/${details.poster_path}`;

  console.log("movie detils", details);

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
            <button className="play-btn">
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
        {details.genres && details.genres.map((genre) => (
          <a key={genre.id} href="#">
            {genre.name},
          </a>
        ))}
      </div>

              <div className="date-time">
                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time dateTime="2021"> {details.release_date
    ? dayjs(details.release_date).format("MMM DD YYYY")
    : details.last_air_date
      ? dayjs(details.last_air_date).format("MMM DD YYYY")
      : "Date Not Available"}</time>
                </div>

                <div>
                  <ion-icon name="time-outline"></ion-icon>

                  <time dateTime="PT115M">115 min</time>
                </div>
              </div>
            </div>

            <p className="storyline">
            {details.overview}
            </p>

            <div className="details-actions">
              <button className="share">
                <ion-icon name="share-social"></ion-icon>

                <span>Share</span>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">{details.tagline}</p>
              </div>

              <button className="btn btn-primary">
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


      
    </>
  );
};

export default MoviesDetail;
