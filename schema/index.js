const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');
const MeType = require('./types/me');
const pgdb = require('../database/pgdb');



const RootQueryType = new GraphQLObjectType({
    name: 'Root',
    description: 'This is the *description* for the root',

    fields: {
        me: {
            type: MeType,
            description: 'The current user chosen by API key',
            args: {
                key: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (obj, args, { pgPool }) => {
                //read user info from database
                return pgdb(pgPool).getUser(args.key);  
            } 
        }
    }
})

const ncSchema = new GraphQLSchema({
    query: RootQueryType
    // mutation: ''
});

module.exports = ncSchema;