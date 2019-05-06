import axios from 'axios';
import {
    CurrencyCode,
    CurrentCurrenciesInput,
    CurrentCurrencyRates,
    CurrencyRates
} from "../gql/graphql";

const exchange = axios.create({
    baseURL: 'https://api.exchangeratesapi.io',
});
export const getCurrencies = async ({currencyCode, base: baseInput}: CurrentCurrenciesInput): Promise<CurrentCurrencyRates> => {
    const currencyArr = currencyCode as CurrencyCode[];
    try {
        const {data: {rates, base, date}} = await exchange.get('/latest', {
            params: {
                symbols: currencyArr !== null && currencyArr.join(),
                base: baseInput
            }
        });
        const ratesArr = Object.entries(rates as CurrencyRates[]).map(([currency, rate]) => {
            return {currency, rate, date}

        });
        return {rates: ratesArr as CurrencyRates[], base, date}

    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
};