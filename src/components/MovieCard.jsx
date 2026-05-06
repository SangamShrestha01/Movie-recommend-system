import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.png";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group w-40 flex-shrink-0"
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-60 object-cover"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Info */}
      <div className="mt-2 text-sm">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
          {movie.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Release: {movie.release_date || "N/A"}
        </p>
        <p className="text-xs text-yellow-400">
          ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
