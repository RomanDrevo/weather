import React from "react";
import {FetchError, useGetHistoricalWeatherQuery, WeatherData} from "../store/weatherApi";
import {Alert} from "antd";
import Compass from "./Compass";

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
};

const WeatherDetails = ({location}: {location: WeatherData}) => {

    const { data: historicalWeather, error  } = useGetHistoricalWeatherQuery(location?.city_name);

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

    const windDir = location?.wind_cdir
    const windSpd = location?.wind_spd

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

                <Compass windDir={windDir} windSpd={windSpd} />
            </div>
            <img
                className='weather-details-icon'
                src={`https://cdn.weatherbit.io/static/img/icons/${location?.weather.icon}.png`}
                alt='weather-icon'
            />


        </>
    )
}

export default WeatherDetails;