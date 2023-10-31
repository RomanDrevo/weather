import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const apiKey = 'f5e006a2199fc49d25f7f37ac582132b'
const apiKey = '5a8ad698f92a46c9be4bd4050c1caec4'




export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherbit.io/v2.0/current' }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherData, string>({
            query: (city) => `?city=${city}&key=${apiKey}`,
        }),
        // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
    }),
});

export const { useGetWeatherQuery } = weatherApi;

interface WeatherData {
    name: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
    };
}

