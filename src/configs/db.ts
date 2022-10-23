import { DataSource,createConnections } from "typeorm";
import { User } from "../entities/User";


export const MongoDataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_URL,
    database: process.env.MONGO_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        "./src/entities/*.ts"
        // User
    ],
    subscribers: [
        // "src/subscriber/*.js"
    ],
    migrations: [
        // "src/migration/*.js"
    ]
})

