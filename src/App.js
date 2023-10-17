import React from "react";
import { useEffect, useState } from "react";


import MovieCard from "./MovieCard";

import "./App.css";
import SearchIconn from "./search.svg";

/* OMDB API
API Key: 82bbe8dc
Link: http://www.omdbapi.com/?i=tt3896198&apikey=82bbe8dc
*/

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=82bbe8dc";

const exampleOne = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movieaaa",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async(title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();

        setMovies(data.Search);
        console.log(data.Search);
    }
    
    return(
        <div className="app">
            <h1>MartinMovies</h1>

            <div className="search" >
                <input
                    placeholder="Search for a movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSubmit={() => searchMovies(searchTerm)}
                />
                <img 
                    src={SearchIconn} 
                    alt="Search" 
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movies.indexOf(movie)} exampleOne={movie} />
                        ))}
                    </div>
                ) :
                (
                    <div className="empty"> 
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;