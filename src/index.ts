import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { schema } from './Schema'
import { Article } from './Entities/Article'
import { Categories } from './Entities/Categories'

const main = async () => {
    await createConnection({
        type: "mysql",
        database: "forexco-schema",
        username: "root",
        password: "123123456X!a",
        logging: true,
        synchronize: true,
        entities: [ Article, Categories ],
    })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log("Running on port 3001")
    })
}

main().catch((err) => {
    console.log(err)
})