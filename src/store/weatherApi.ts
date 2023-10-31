import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = '5a8ad698f92a46c9be4bd4050c1caec4'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherbit.io/v2.0/current' }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherDataResponse, string>({
            query: (city) => `?city=${city}&key=${apiKey}`,
        }),
    }),
});

export const { useGetWeatherQuery } = weatherApi;

interface WeatherDataResponse {
    data: WeatherData[]
    count: number

}

interface WeatherData {
    city_name: string;
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

