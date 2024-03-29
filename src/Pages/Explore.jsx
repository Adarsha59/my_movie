import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { fetchDataFromApi } from "../../components/Api";
import InfiniteScroll from "react-infinite-scroll-component";

const Explore = () => {
  const navigate = useNavigate();
  const { mediatype } = useParams();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi(
          `/discover/${mediatype}?page=${pageNumber}`
        );
        setData((prevData) => [...prevData, ...result.results]);
        setHasMore(result.results.length > 0);
        setPageNumber(pageNumber + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [mediatype, pageNumber]);

  const handleCardClick = (id, mediaType) => {
    navigate(`/${mediaType}/${id}/`);
  };
  return (
    <>
      <div>{console.log("la", data)}</div>
      {data.length > 0 && (
        <section className="top-rated">
          <div className="container">
            <ul className="movies-list">
              {data.map((file) => (
                <li key={file.id}>
                  <div
                    className="movie-card"
                    onClick={() =>
                      handleCardClick(file.id, file.media_type || mediatype)
                    }
                  >
                    <a>
                      <figure className="card-banner">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${file.poster_path}`}
                          alt={`${file.original_title || file.name} poster`}
                        />
                      </figure>
                    </a>

                    <div className="title-wrapper">
                      <a>
                        <h3 className="card-title">
                          {file.original_title || file.name}
                        </h3>
                      </a>
                    
                      <time dateTime="2022">
                        {file.media_type === "movie"
                          ? dayjs(file.release_date).format("MMM DD YYYY")
                          : dayjs(file.first_air_date).format("MMM DD YYYY")}
                      </time>
                    </div>

                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>

                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time dateTime="PT122M">{file.original_language}</time>
                      </div>

                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>{Math.ceil(file.vote_average)}</data>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Explore;
