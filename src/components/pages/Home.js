import React, { useEffect, useState } from 'react';
import "./Home.css"
import Search from '../Search';
import WeatherCard from '../WeatherCard';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const handleWeatherDataUpdate = (data) => {
        setWeatherData(data);
    };

    useEffect(() => {
        console.log(weatherData)
    }, [weatherData])

    return (
        <div>
            <Search onWeatherDataUpdate={handleWeatherDataUpdate} />
            <WeatherCard weatherData={weatherData} />
        </div>
    );
};

export default Home;
