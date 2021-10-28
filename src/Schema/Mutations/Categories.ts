import { GraphQLString } from 'graphql'
import { Categories } from '../../Entities/Categories'
import { CategoryType } from '../TypeDefs/Categories'
 
export const CREATE_CATEGORY = {
    type: CategoryType,
    args: {
        category: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { category } = args
        await Categories.insert({ category })
        return args
    }
}