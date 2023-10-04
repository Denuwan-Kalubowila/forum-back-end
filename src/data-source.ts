import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Question } from "./entity/Question"
import { Category } from "./entity/Category"
import { Answer } from "./entity/Answer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Denu2294#$$",
    database: "Forum",
    synchronize: true,
    logging: true,
    entities: [User,Question,Category,Answer],
    migrations: [],
    subscribers: [],
})
