import { Client } from 'ts-postgres';
import {ConnectionString} from 'connection-string';

 
async function main() {

    const obj = new ConnectionString(process.env.DATABASE_URL || "");
    console.log(obj)
    // const client = new Client({
        
    // });
    // await client.connect();
 
    // const stream = client.query(
    //     `SELECT 'Hello ' || $1 || '!' AS message`,
    //     ['world']
    // );
 
    // for await (const row of stream) {
    //     console.log(row.get('message')); // 'Hello world!'
    // }
 
    // await client.end();
}
 
export default main()