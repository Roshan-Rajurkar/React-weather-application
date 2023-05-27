import React from 'react';
import './WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <div>No weather data available.</div>;
    }

    const {
        location: { city, country },
        current_observation: { condition, atmosphere, wind },
    } = weatherData;

    return (
        <div className="card">
            <div className="card-header">{city}, {country}</div>
            <div className="card-body">
                <div className="temperature">{condition.temperature}°C</div>
                <div className="conditions">{condition.text}</div>
                <div className="humidity">Humidity: {atmosphere.humidity}%</div>
                <div className="wind">Wind: {wind.speed} km/h</div>
            </div>
        </div>
    );
};

export default WeatherCard;
