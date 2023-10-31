import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = '5a8ad698f92a46c9be4bd4050c1caec4'



const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate
}

const getYesterdayDate = () => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = String(yesterday.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate
}

console.log(getTodayDate(), ':' , getYesterdayDate())





export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherbit.io/v2.0' }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherDataResponse, string>({
            query: (city) => `/current?city=${city}&key=${apiKey}`,
        }),
        getHistoricalWeather: builder.query<HistoricalWeatherData, string>({
            query: (city) => `history/daily?start_date=${getYesterdayDate()}&end_date=${getTodayDate()}&city=${city}&key=${apiKey}`,
        }),
    }),
});

export const { useGetWeatherQuery, useGetHistoricalWeatherQuery } = weatherApi;

interface WeatherDataResponse {
    data: WeatherData[]
    count: number
}

export interface WeatherData {
    city_name: string;
    country_code: string;
    clouds: number
    lat: number
    lon: number
    pod: string
    pres: number
    rh: number
    slp: number
    snow: 0
    sunrise: string
    sunset: string
    temp: number
    vis: number
    weather: {description: string, code: number, icon: string}
    wind_cdir_full: string
    wind_spd: number
}



export interface HistoricalWeatherData {
    city_name: string;
    country_code: string;
    data: {
      min_temp: number
      max_temp: number
    }[]
}