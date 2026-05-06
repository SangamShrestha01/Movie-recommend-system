import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getMovieDetails,
  getSimilarMovies,
  getMovieVideos,
  getMovieCredits, // ✅ make sure this exists in your TMDB service
} from "../services/tmdb";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);
  const [cast, setCast] = useState([]); // ✅ add cast state
  const [loading, setLoading] = useState(false);

  // Fetch homepage movies
  useEffect(() => {
    getTrendingMovies().then((res) => setTrending(res.data.results));
    getPopularMovies().then((res) => setPopular(res.data.results));
    getTopRatedMovies().then((res) => setTopRated(res.data.results));
  }, []);

  // Fetch single movie details
  const fetchMovieDetails = async (id) => {
    setLoading(true);
    try {
      const [detailRes, similarRes, videoRes, creditsRes] = await Promise.all([
        getMovieDetails(id),
        getSimilarMovies(id),
        getMovieVideos(id),
        getMovieCredits(id), // ✅ fetch cast/crew
      ]);

      setMovie(detailRes.data);
      setSimilar(similarRes.data.results);
      setVideos(videoRes.data.results);
      setCast(creditsRes.data.cast); // ✅ store cast
    } catch (err) {
      console.error("Failed to fetch movie details:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        trending,
        popular,
        topRated,
        movie,
        similar,
        videos,
        cast, // ✅ provide cast in context
        loading,
        fetchMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
