import axios from 'axios';
import {
    CurrencyCode,
    CurrentCurrenciesInput,
    CurrentCurrencyRates,
    CurrencyRates,
    HistoryCurrenciesInput,
    HistoryCurrencyRates,
    HistoryCurrencyRate,
    Country,
    WeatherForecast, QueryGetWeatherForecastByCountryArgs
} from "../gql/graphql";

const OAuth = require('oauth');

const exchange = axios.create({
    baseURL: 'https://api.exchangeratesapi.io',
});

const restCountries = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});

const header = {
    "X-Yahoo-App-Id": ""
};
const request = new OAuth.OAuth(
    null,
    null,
    '',
    '',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

export const getWeatherByLocation = async ({city, country}: QueryGetWeatherForecastByCountryArgs): Promise<WeatherForecast> => {
    return await new Promise(
        (resolve, reject) => {
            request.get(
                `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city},${country}&format=json`,
                null,
                null,
                function (err: any, data: any, result: any) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(data);
                        resolve(JSON.parse(data));
                    }
                })
        });
};

export const getCountryByName = async (input: String): Promise<Country[]> => {
    try {
        const {data} = await restCountries.get<Country[]>(`/name/${input}`, {
            params: {
                fulltext: true
            }
        });
        return data;
    } catch (e) {
        console.error(e);
        throw new Error(e)
    }
};

export const getCurrentCurrencies = async ({currencyCode, base: baseInput}: CurrentCurrenciesInput): Promise<CurrentCurrencyRates> => {
    const currencyArr = currencyCode as CurrencyCode[];
    try {
        const {data: {rates, base, date}} = await exchange.get('/latest', {
            params: {
                symbols: currencyArr !== null && currencyArr.join(),
                base: baseInput
            }
        });
        const ratesArr = Object.entries(rates).map(([currency, ratio]) => {
            return {currency, ratio, date}
        });

        return {rates: ratesArr as CurrencyRates[], base, date}

    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
};

export const getHistoricCurrencies = async ({currencyCode, base: baseInput, startAt, endAt}: HistoryCurrenciesInput): Promise<HistoryCurrencyRates> => {
    const currencyArr = currencyCode as CurrencyCode[];
    try {
        const {data: {rates, base, start_at, end_at}} = await exchange.get('/history', {
            params: {
                ...(startAt && {start_at: startAt}),
                ...(endAt && {end_at: endAt}),
                symbols: currencyArr !== null && currencyArr.join(),
                base: baseInput
            }
        });

        const rest = Object.entries(rates).map(([exchangeDate, historyRate]) => ({
                date: exchangeDate,
                rate: [...Object.entries(historyRate).map(([currency, ratio]) => ({currency, ratio}))]
            })
        );

        return {rates: rest as unknown as HistoryCurrencyRate[], base, endAt: end_at, startAt: start_at}
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
};
