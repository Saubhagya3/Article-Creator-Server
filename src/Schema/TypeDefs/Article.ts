import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date'

export const ArticleType = new GraphQLObjectType({
    name: "Article",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        country: { type: GraphQLString },
        category: { type: GraphQLString },
        content: { type: GraphQLString },
        date: { type: GraphQLString },
    })
})