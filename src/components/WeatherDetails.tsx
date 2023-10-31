import React from "react";
import {useGetHistoricalWeatherQuery, WeatherData} from "../store/weatherApi";

const WeatherDetails = ({location}: {location: WeatherData}) => {

    const { data: historicalWeather, error, isLoading } = useGetHistoricalWeatherQuery(location?.city_name);

    console.log('--->>>historicalWeather: ', historicalWeather?.data[0])

    return (
        <>
            <div className='weather-details'>
                <div className='weather-details-text temp'>{location?.temp}&deg;</div>
                <div className='historical-weather-details'>
                    <span style={{marginRight: 10}} className='weather-details-text'>H:{historicalWeather?.data[0].max_temp}&deg;</span>
                    <span className='weather-details-text'>L: {historicalWeather?.data[0].min_temp}&deg;</span>
                </div>

                <div className='location'>
                    <div style={{marginTop: 10}} className='weather-details-text'>{location?.city_name}, {location.country_code}</div>
                    <div className='weather-details-text'>{location?.weather.description}</div>
                </div>


            </div>
            <img
                className='weather-details-icon'
                src={`https://cdn.weatherbit.io/static/img/icons/${location?.weather.icon}.png`}
                alt={`https://cdn.weatherbit.io/static/img/icons/${location?.weather.icon}.png`}
            />
        </>
    )
}

export default WeatherDetails;