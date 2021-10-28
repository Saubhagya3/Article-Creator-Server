import { GraphQLList } from 'graphql'
import { Categories } from '../../Entities/Categories'
import { CategoryType } from '../TypeDefs/Categories'
 
export const GET_ALL_CATEGORIES = {
    type: new GraphQLList(CategoryType),
    resolve(): any {
        return Categories.find()
    }
}