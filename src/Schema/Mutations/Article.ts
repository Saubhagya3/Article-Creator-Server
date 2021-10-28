import { GraphQLString } from 'graphql'
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date'
import { ArticleType } from '../TypeDefs/Article'
import { Article } from '../../Entities/Article'
 
export const CREATE_ARTICLE = {
    type: ArticleType,
    args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        country: { type: GraphQLString },
        category: { type: GraphQLString },
        content: { type: GraphQLString },
        date: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { title, author, country, category, content, date } = args
        await Article.insert({ title, author, country, category, content, date })
        return args
    }
}