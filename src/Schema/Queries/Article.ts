import { GraphQLList } from 'graphql'
import { Article } from '../../Entities/Article'
import { ArticleType } from '../TypeDefs/Article'
 
export const GET_ALL_ARTICLES = {
    type: new GraphQLList(ArticleType),
    resolve(): any {
        return Article.find()
    }
}