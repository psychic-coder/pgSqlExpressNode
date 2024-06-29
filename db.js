import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "rohitpen",
    host: "127.0.0.1",
    port: 5432,
    database: "perntodo"
});

export { pool };
