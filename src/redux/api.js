import axios from "axios";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY_OMDBAPI}`;

export const fetchMovies = async (movieName) =>
  axios.get(`${API_ENDPOINT}&s=${movieName}`);

