import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { fetchDataFromApi } from "../../components/Api";
import "./movecard.css";
const MovieCard = ({ trendingMovies,mediaType }) => {
  const Navigate = useNavigate();
  const [genreNames, setGenreNames] = useState([]);

  useEffect(() => {
    const fetchGenreNames = async () => {
      try {
        // Fetch the list of genres
        const genresResponse = await fetchDataFromApi(`/genre/movie/list`);

        // Create a map of genre IDs to genre names
        const genreMap = genresResponse.genres.reduce(
          (acc, genre) => ({ ...acc, [genre.id]: genre.name }),
          {}
        );

        // Fetch genre names for each movie and set it in state
        const names = trendingMovies.map((movie) =>
          movie.genre_ids.map((genreId) => genreMap[genreId])
        );

        setGenreNames(names);
      } catch (error) {
        console.error("Error fetching genre names:", error);
      }
    };

    // Fetch genre names only if there are trendingMovies
    if (trendingMovies.length > 0) {
      fetchGenreNames();
    }
  }, [trendingMovies]);
  const handleCardClick = (movie) => {
    Navigate(`/${movie.media_type || mediaType}/${movie.id}/`);
  };

  return (
    <div className="container">
      <ul className="movies-list has-scrollbar">
        {trendingMovies.map((movie, index) => (
          <li key={movie.id}>
            <div className="movie-card" onClick={() => handleCardClick(movie)}>
              
                <figure className="card-banner">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Movie poster"
                  />
                </figure>
           

              <div className="title-wrapper">
                <a href="#">
                  <h3 className="card-title">
                    {movie.original_title || movie.name}
                  </h3>
                </a>

                <time dateTime="2022">
                  {movie.media_type === "movie"
                    ? dayjs(movie.release_date).format("MMM DD YYYY")
                    : dayjs(movie.first_air_date).format("MMM DD YYYY")}
                </time>
              </div>

              <div className="card-meta">
                <div className="genres">
                  {genreNames[index] && genreNames[index].length > 0 ? (
                    genreNames[index].slice(0, 2).map((genre, genreIndex) => (
                      <div key={genreIndex} className="badge badge-outline">
                        {genre}
                      </div>
                    ))
                  ) : (
                    <div className="badge badge-outline">
                      No Genre Available
                    </div>
                  )}
                </div>
                <div className="duration">
                  <ion-icon name="time-outline"></ion-icon>
                  <time>{movie.original_language} </time>
                </div>

                <div className="rating">
                  <ion-icon name="star"></ion-icon>
                  <data>{Math.ceil(movie.vote_average)}</data>
                </div>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default MovieCard;
