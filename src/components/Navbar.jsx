import React from "react";
import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const { search } = useSearch();
  const { dark, setDark } = useTheme();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    search(query);
    navigate("/search");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">🎬 MovieApp</Link>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          className="px-2 py-1 text-white rounded"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="bg-red-500 px-3 rounded">Search</button>
      </form>

      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
