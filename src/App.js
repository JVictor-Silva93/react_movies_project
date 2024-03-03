import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// a424ac3c

const API_URL = "http://www.omdbapi.com?apikey=a424ac3c"

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    const movie1 = {
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} 
                alt="Search" 
                onClick={() => searchMovies(searchTerm)}/>
            </div>

            {movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
                ) : (
                    <div className="Empty">
                        <h2>No movies found</h2>
                    </div>
                )}

        </div>
    );
};

export default App;