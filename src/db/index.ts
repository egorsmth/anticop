import {createConnection} from "typeorm";

export default createConnection(process.env.DATABASE_URL || "")
