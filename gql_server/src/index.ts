import {CurrencyCode, CurrentCurrenciesInput, CurrentCurrencyRates, QueryResolvers} from "./gql/graphql";
import {ApolloServer} from 'apollo-server';
import {IResolvers} from 'graphql-tools';
import {getCurrencies} from "./api/requests";

const {importSchema} = require('graphql-import');
const typeDefs = importSchema('../schema.graphql');

export const Query: QueryResolvers = {
    currentCurrencies: async (_, args) => {
        return await getCurrencies(args.currentCurrenciesInput as CurrentCurrenciesInput);
    },
    historyCurrencies: (root, {currencyCode, endAt, startAt}, context) => {
        throw new Error('error');
    }
};
const resolvers: IResolvers = {
    Query: {
        ...Query as IResolvers
    }
}

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