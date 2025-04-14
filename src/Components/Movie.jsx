// CityDetails.js
import React, { useEffect, useState } from "react";

function Movie(props) {
    const [weatherData, setWeatherData] = useState(null);
    const city = props.title;

    function fetchCityData(cityName) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=aff3940bbb744342a80133547251304&q=${cityName}&aqi=no`)
            .then((response) => response.json())
            //.then((data) => setInfo(data))
            .then((data) => {
                setWeatherData({
                    tempC: data.current.temp_c,
                });
                //alert(`Weather Info for ${name}, ${region}, ${country}:\nTemperature: ${tempC}°C`);
            })
            .catch((error) => {
                console.error("Error fetching city data:", error);
                alert("Error fetching data. Please try again.");
            });
    }

    useEffect(() => {
        if (city) {
            fetchCityData(city);
        }
    }, [city]);

    return (
        <div className='card'>
            <div>
                <a href={props.wikiURL} target="_blank" rel="noopener noreferrer" >
                    <div className="tooltip">
                        <img height='250' width='200' src={props.url} alt='SQUID GAME' />
                        <span className="tooltiptext">Click to know more about {props.title}</span>
                    </div>
                </a>
                
                <h2>{props.title}</h2>
                {weatherData ? (
                    <div>
                        <p><strong>Temperature:</strong> {weatherData.tempC} °C</p>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </div>
    );
}

export default Movie;

