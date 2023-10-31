import React, { useState } from 'react';
import {useGetWeatherQuery} from '../store/weatherApi';

const Weather = () => {
    const [city, setCity] = useState<string>('');
    const { data, error, isLoading } = useGetWeatherQuery(city, {
        skip: city === '',
    });



    const location = data?.data[0]

    console.log('--->>>location: ', location)

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={() => setCity('')}>Clear</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error fetching weather data</p>}
            {/*{data && (*/}
            {/*    <div>*/}
            {/*        <h3>{data.name}</h3>*/}
            {/*        <p>{data.weather[0].description}</p>*/}
            {/*        <img*/}
            {/*            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}*/}
            {/*            alt={data.weather[0].description}*/}
            {/*        />*/}
            {/*        <p>Temperature: {data.main.temp}°C</p>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}

export default Weather;
