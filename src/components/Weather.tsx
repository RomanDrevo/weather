import React, { useState } from 'react';
import {FetchError, WeatherData} from '../store/weatherApi';
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import {Alert} from "antd";
import {useWeather} from "../hooks/useWeather";

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
};


const Weather = () => {
    const [city, setCity] = useState<string>('');
    const { data, error, isLoading } = useWeather(city);

    const fetchError = error as  FetchError;

    if(fetchError && 'data' in fetchError){
        return (
            <Alert
                message="Something went wrong..."
                description={fetchError.data.error}
                type="error"
                closable
                onClose={onClose}
            />

        )
    }

    const location = data?.data[0] as WeatherData


    return (
        <div className='weather'>
           <SearchBar handleSearch={setCity} value={city} />
            {isLoading && <p>Loading...</p>}
            {data && (
                <div className='weather-wrapper'>
                    <WeatherDetails location={location} />
                </div>

            )}
        </div>
    );
}

export default Weather;
