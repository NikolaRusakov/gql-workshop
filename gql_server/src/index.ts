import {
    CurrentCurrenciesInput,
    HistoryCurrenciesInput,
    QueryResolvers, WeatherForecast
} from "./gql/graphql";
import {ApolloServer} from 'apollo-server';
import {IResolvers} from 'graphql-tools';
import {getCountryByName, getCurrentCurrencies, getHistoricCurrencies, getWeatherByLocation} from "./api/requests";

const {importSchema} = require('graphql-import');
const typeDefs = importSchema('./schema.graphql');

export const Query: QueryResolvers = {
    currentCurrencies: async (_, args) => {
        return await getCurrentCurrencies(args.currentCurrenciesInput as CurrentCurrenciesInput);
    },
    historyCurrencies: async (_, args) => {
        return await getHistoricCurrencies(args.historyCurrenciesInput as HistoryCurrenciesInput);
    },
    getCountryByFullName: async (_, args) => {
        return await getCountryByName(args.name);
    },
    getWeatherForecastByCountry: async (_, args) => {
        const data = await getWeatherByLocation(args);
        const res = {
            location: {
                woeid: 796597,
                city: "Prague",
                region: " Prague",
                country: "Czech Republic",
                lat: 50.079079,
                long: 14.43322,
                timezone_id: "Europe/Prague"
            }
        };
        return data as WeatherForecast
    }
};

const resolvers: IResolvers = {
    Query: {
        ...Query as IResolvers
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers,
    cors: true,
    introspection: true,
    uploads: false,
    playground: true,
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});