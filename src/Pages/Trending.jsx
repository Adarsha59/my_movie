import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchDataFromApi } from "../../components/Api";
import Fetch from "../../components/Fetch";
import { parsePath, useNavigate } from "react-router-dom";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentMediaType, setCurrentMediaType] = useState("tv"); // Default to TV shows
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTrendingData = async (endpoint) => {
      try {
        const data = await fetchDataFromApi(endpoint);

        // Fetch details with runtime for each movie or TV show
        const dataWithRuntime = await Promise.all(
          data.results.map(async (item) => {
            const details = await fetchDataFromApi(
              `/${item.media_type || currentMediaType}/${item.id}`
            );
            return { ...item, details };
          })
        );

        setTrendingMovies(dataWithRuntime);
        setFilteredMovies(dataWithRuntime);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    // Fetch trending data based on the current media type
    fetchTrendingData(`/trending/${currentMediaType}/week`);
  }, [currentMediaType]);

  const handleFilterButtonClick = (mediaType) => {
    // Set the current media type and trigger a re-fetch
    setCurrentMediaType(mediaType);
  };
  const explore ="trending"
  const currentMediaTy="movie"
  const handleExploreAllClick = () => {
    // Navigate to the Explore component with the "all" category
    navigate(`/explore/movie`);
  };

  return (
    <>
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>

          <h2 className="h2 section-title">Trending</h2>

          <ul className="filter-list">
            <li>
              <button
                className={`filter-btn ${
                  currentMediaType === "movie" ? "active" : ""
                }`}
                onClick={() => handleFilterButtonClick("movie")}
              >
                Movies
              </button>
            </li>

            <li>
              <button
                className={`filter-btn ${
                  currentMediaType === "tv" ? "active" : ""
                }`}
                onClick={() => handleFilterButtonClick("tv")}
              >
                TV Shows
              </button>
            </li>
            <li>
              <button
                className="filter-btn"
                onClick={handleExploreAllClick}
              >
                Explore All
              </button>
            </li>
          </ul>

          <section className="upcoming">
            <div className="movies-container">
              {/* Pass filteredMovies to MovieCard component instead of trendingMovies */}
              <MovieCard trendingMovies={filteredMovies} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Trending;
