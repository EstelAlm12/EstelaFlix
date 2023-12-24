import { useEffect } from 'react';

// 26ad436

import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=26ad436'

const movie1 = {
    "Year": "2012",
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Titanic');

    }, []);

    return (
        <div className="app">
            <h1>Estelaflix</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Titanic"
                    onChange={() => {}}

                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
