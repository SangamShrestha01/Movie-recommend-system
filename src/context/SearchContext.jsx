import React from "react";
import { createContext, useContext, useState } from "react";
import { searchMovies } from "../services/tmdb";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  const search = async (query) => {
    if (!query) return;
    const res = await searchMovies(query);
    setResults(res.data.results);
  };

  return (
    <SearchContext.Provider value={{ results, search }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
