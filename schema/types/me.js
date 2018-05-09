const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'MeType',
    fields: {
        id: {type: GraphQLID},
        firstName: {
            type: GraphQLString,
            resolve: obj => obj.first_name
        },
        email: {type: new GraphQLNonNull(GraphQLString)}
    }
})