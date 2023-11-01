import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getTodayDate, getYesterdayDate} from "../helpers";

const apiKey = '5a8ad698f92a46c9be4bd4050c1caec4'

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

export interface WeatherDataResponse {
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
    snow: number
    sunrise: string
    sunset: string
    temp: number
    vis: number
    weather: {description: string, code: number, icon: string}
    wind_cdir_full: string
    wind_spd: number
    wind_cdir: string
}



export interface HistoricalWeatherData {
    city_name: string;
    country_code: string;
    data: {
      min_temp: number
      max_temp: number
    }[]
}

export interface FetchError {
    status: number
    data:{
        error: string
    }
}