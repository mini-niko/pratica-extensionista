import { Client } from "pg";

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });

  await client.connect();

  return client;
}

async function query({ query, values = [] }) {
  let client;

  try {
    client = await getNewClient();

    const response = await client.query(query, values);

    return response;
  } finally {
    await client?.end();
  }
}

const database = {
  query,
};

export default database;
