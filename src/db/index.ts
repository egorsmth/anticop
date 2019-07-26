import {createConnection} from "typeorm";

export default createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
        __dirname + "entity/Point.js"
    ]
})
