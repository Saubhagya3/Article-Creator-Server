import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_ARTICLES } from "./Queries/Article";
import { CREATE_ARTICLE } from "./Mutations/Article";
import { GET_ALL_CATEGORIES } from "./Queries/Categories";
import { CREATE_CATEGORY } from "./Mutations/Categories";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllArticles: GET_ALL_ARTICLES,
        getAllCategories: GET_ALL_CATEGORIES,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createArticle: CREATE_ARTICLE,
        createCategory: CREATE_CATEGORY,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})