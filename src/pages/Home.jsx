import React from "react";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const { trending, popular, topRated } = useMovies();

  return (
    <div className="space-y-10 p-4">
      <HeroBanner movie={trending[0]} />

      <section>
        <h2 className="text-xl font-bold mb-2">Trending</h2>
        <div className="flex gap-4 overflow-x-scroll">
          {trending.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Popular</h2>
        <div className="flex gap-4 overflow-x-scroll">
          {popular.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Top Rated</h2>
        <div className="flex gap-4 overflow-x-scroll">
          {topRated.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
