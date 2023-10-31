import React, { useState } from 'react';
import {useGetWeatherQuery, WeatherData} from '../store/weatherApi';
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";


const Weather = () => {
    const [city, setCity] = useState<string>('');
    const { data, error, isLoading } = useGetWeatherQuery(city, {
        skip: city === '',
    });



    const location = data?.data[0] as WeatherData

    console.log('--->>>data: ', data)
    console.log('--->>>location: ', location)


    return (
        <div className='weather'>
           <SearchBar handleSearch={setCity} value={city} />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error fetching weather data</p>}
            {data && (
                <div className='weather-wrapper'>
                    <WeatherDetails location={location} />
                </div>

            )}
        </div>
    );
}

export default Weather;
