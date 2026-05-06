import React from "react";
const HeroBanner = ({ movie }) => {
  if (!movie) return null;

  return (
    <div
      className="h-[60vh] bg-cover bg-center flex items-end p-8 text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="bg-black/60 p-6 rounded">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="max-w-xl">{movie.overview}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
