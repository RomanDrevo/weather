import { useGetWeatherQuery } from '../store/weatherApi';

export const useWeather = (city: string) => {
    return useGetWeatherQuery(city, {
        skip: city === '',
    });
};