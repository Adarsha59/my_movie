import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchDataFromApi } from "../../components/Api";
import Fetch from "../../components/Fetch";

const Recommendation = ({ mediaType, mediaId }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const recommendations = await fetchDataFromApi(
          `/${mediaType}/${mediaId}/recommendations`
        );

        // Fetch details with runtime for each recommended movie or TV show
        const recommendedWithDetails = await Promise.all(
          recommendations.results.map(async (item) => {
            const details = await fetchDataFromApi(
              `/${item.media_type}/${item.id}`
            );
            return { ...item, details };
          })
        );

        setRecommendedMovies(recommendedWithDetails);
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
    };

    // Fetch recommended movies based on the provided media type and ID
    fetchRecommendedMovies();
  }, [mediaType, mediaId]);

  return (
    <>
      <section className="recommended">
        <div className="container">
          <h2 className="h2 section-title">Recommended Movies</h2>

          <div className="movies-container">
            <MovieCard trendingMovies={recommendedMovies} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
