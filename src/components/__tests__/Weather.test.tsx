import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from '../Weather';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {weatherApi, WeatherDataResponse} from '../../store/weatherApi'; // adjust the import based on your file structure
import {
    QueryActionCreatorResult,
    QueryDefinition,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryStatus
} from '@reduxjs/toolkit/query';
import * as hooks from '../../hooks/useWeather';

jest.mock('../../store/weatherApi', () => ({
    ...jest.requireActual('../../store/weatherApi'),
    useGetWeatherQuery: jest.fn(),
}));


jest.mock('../../hooks/useWeather');

const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

test('renders loading message', () => {
    jest.spyOn(hooks, 'useWeather').mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: true,
        isError: false,
        status: QueryStatus.uninitialized,
        isFetching: false,
        isSuccess: false,
        isUninitialized: false,
        refetch: function (): QueryActionCreatorResult<QueryDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, WeatherDataResponse, 'weatherApi'>> {
            throw new Error('Function not implemented.');
        }
    });

    render(
        <Provider store={store}>
            <Weather />
        </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

