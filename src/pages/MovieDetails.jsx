import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, similar, cast, loading, videos, fetchMovieDetails } = useMovies();

  useEffect(() => {
    if (id) fetchMovieDetails(id);
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading...</p>;
  if (!movie) return <p className="p-4 text-center">Movie not found</p>;

  const trailer =
    videos?.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
    videos?.find((v) => v.site === "YouTube");

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.png";

  return (
    <div className="space-y-6 p-4">
      {/* Movie Title and Poster */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-64 md:w-72 rounded-lg shadow-lg"
        />
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-black-700 dark:text-white-300">{movie.overview}</p>
          <p className="text-black-600 dark:text-white-400">
            <span className="font-bold">Release Date:</span> {movie.release_date || "N/A"}
          </p>
          <p className="text-black-600 dark:text-white-400">
            <span className="font-bold">Rating:</span>{" "}
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10
          </p>
        </div>
      </div>

      {/* Trailer */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Trailer</h2>
        {trailer ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Movie Trailer"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="text-black-400 italic">Trailer not available</p>
        )}
      </div>

      {/* Cast */}
      <div>
        <h2 className="text-xl font-bold mb-2">Cast</h2>
        {cast && cast.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {cast.map((member) => {
              const profileUrl = member.profile_path
                ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                : "/placeholder.png";
              return (
                <div key={member.cast_id} className="w-32 flex-shrink-0 text-center">
                  <img
                    src={profileUrl}
                    alt={member.name}
                    className="w-32 h-40 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm font-semibold mt-1 truncate">{member.name}</p>
                  <p className="text-xs text-black-500 dark:text-white-400 truncate">
                    {member.character}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-black-400 italic">Cast information not available</p>
        )}
      </div>

      {/* Similar Movies */}
      <div>
        <h2 className="text-xl font-bold mb-2">Similar Movies</h2>
        {similar.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {similar.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        ) : (
          <p className="text-black-400 italic">No similar movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
