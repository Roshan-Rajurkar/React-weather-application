import React, { useState } from 'react';
import './Search.css';

const Search = ({ onWeatherDataUpdate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setIsSearching(true);
        setError(null);
        try {
            const response = await fetch(
                `https://yahoo-weather5.p.rapidapi.com/weather?location=${searchQuery}&format=json&u=c`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '515863d9b5msh16d789b85d700a8p1121ffjsnbace9274a983',
                        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            // Handle weather data
            onWeatherDataUpdate(data);
        } catch (error) {
            setError(error.message);
        }
        setIsSearching(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isSearching) {
            fetchWeather();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="input-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                        placeholder="Enter city name..."
                    />
                    <button type="submit" disabled={isSearching} className="search-button">
                        {isSearching ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Search;
