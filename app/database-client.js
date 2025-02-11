import "dotenv/config";
import pg from "pg";

const client = new pg.Client(process.env.PG_URL);

client.connect();

export default client;