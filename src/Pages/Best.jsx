import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchDataFromApi } from "../../components/Api";
import { useNavigate } from "react-router-dom";

const Best = () => {
    const navigate = useNavigate();
  const [bollywoodMovies, setBollywoodMovies] = useState([]);
  useEffect(() => {
    const fetchBollywoodMovies = async () => {
      try {
        // Fetch Bollywood movies without specifying a genre
        const bollywoodMoviesResponse = await fetchDataFromApi(
          "/movie/now_playing?with_original_language=hi"
        );
        setBollywoodMovies(bollywoodMoviesResponse.results);
      } catch (error) {
        console.error("Error fetching Bollywood movies:", error);
      }
    };
    fetchBollywoodMovies();
  }, []);
  const handleExploreAllClick = () => {
    // Navigate to the Explore component with the "all" category
    navigate(`/explore/movie`);
  };
  return (
    <>
      <section className="top-rated">
        <div className="container">
          <p className="section-subtitle">Online Streaming</p>
          <h2 className="h2 section-title">Now Playing</h2>
          <ul>
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
              {/* Pass bollywoodMovies to MovieCard component */}
              <MovieCard trendingMovies={bollywoodMovies} mediaType="movie" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Best;
