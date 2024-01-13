import axios from "axios";
// Uncomment the line below and make sure your token is imported correctly
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const baseURL= "https://api.themoviedb.org/3"

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Uncomment the line below and make sure your token is used correctly
    // Authorization: "Bearer " + TMDB_TOKEN,
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzlkYWE0NTJkMWQwMjUwODI2N2ZkZTRhNWIxZTY3NiIsInN1YiI6IjY0MmQzYWY5MTU4Yzg1MDBlMGI3ZDFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vEZV2XBa5BPnXojrncZg9qvAP4rewmkHWwKijvGcixU'
  },
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(baseURL + url, {
      headers: options.headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
