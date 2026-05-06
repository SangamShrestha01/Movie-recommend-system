import React from "react";
import { useSearch } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const { results } = useSearch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
