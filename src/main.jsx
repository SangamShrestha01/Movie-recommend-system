import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MovieProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </MovieProvider>
  </ThemeProvider>
);

