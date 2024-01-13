import React, { useEffect, useState } from "react";
import Fetch from "./Fetch";
import { useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "./Api";

const Herobanner = () => {
  const { data, loading } = Fetch("/movie/upcoming");
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState(
    "https://image.tmdb.org/t/p/original/9ZlGiEKmcYrrxmiQEJDhjeT2kEW.jpg"
  );
  const Navigate = useNavigate();
  const searchHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      Navigate(`/search/${query}`);
    } else {
      console.log("error");
    }
  };
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const data = await fetchDataFromApi("/movie/upcoming");
        setUpcomingMovies(data.results);

        // Set background to the poster of the first upcoming movie
        if (data?.results?.length > 0) {
          const bg = `https://image.tmdb.org/t/p/original/${
            data.results[Math.floor(Math.random() * data.results.length)]
              ?.backdrop_path
          }`;

          setBackground(
            bg
            // `https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`
          );
        }
      } catch (error) {
        // Handle error, e.g., show a user-friendly message
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, []);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      Navigate(`/search/${query}`);
    }
  };
  const go = () => {
    Navigate(`/search/${query}`);
  };
  return (
    <section
      className="hero"
      style={{
        background: `url("${background}") no-repeat`,
      }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Filmlane</p>

          <h1 className="h1 hero-title">
            Unlimited <strong>Movie</strong>, TVs Shows, & More.
          </h1>
        </div>

        <div className="search-container">
          <input
            className="btn btn-primary"
            type="text"
            placeholder="Search for movies .."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchHandle}
          />
          <div className="hey" onClick={go}>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
