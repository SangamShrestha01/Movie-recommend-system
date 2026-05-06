import axios from "axios";

const BEARER = import.meta.env.VITE_TMDB_BEARER;

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${BEARER}`,
    accept: "application/json",
  },
});

// Homepage movies
export const getTrendingMovies = () => client.get("/trending/movie/day");
export const getPopularMovies = () => client.get("/movie/popular");
export const getTopRatedMovies = () => client.get("/movie/top_rated");

// Movie details
export const getMovieDetails = (id) => client.get(`/movie/${id}`);
export const getSimilarMovies = (id) => client.get(`/movie/${id}/similar`);
export const getMovieCredits = (id) => client.get(`/movie/${id}/credits`);
export const getMovieVideos = (id) =>
  client.get(`/movie/${id}/videos`, {
    params: {
      include_video_language: "en,null",
    },
  });

// Search
export const searchMovies = (query) =>
  client.get("/search/movie", { params: { query } });
