import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import dayjs from "dayjs"; // Assuming you are using dayjs for date formatting

import { fetchDataFromApi } from "../../components/Api";

const SearchResult = () => {
    const [data, setData] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();
    const navigate = useNavigate();
    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res.results || []); // Assuming the results array is present in the API response
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData((prevData) => [...prevData, ...res.results]);
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

  
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
                                            handleCardClick(
                                                file.id,
                                                file.media_type || "movie"
                                            )
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
            <InfiniteScroll
                className="content"
                dataLength={data.length}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
            />
        </>
    );
};

export default SearchResult;
