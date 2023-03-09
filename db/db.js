import pkg from 'pg';
const { Pool } = pkg;
/* import * as dotenv from 'dotenv';
dotenv.config() */

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'node',
  database: process.env.DB_DATABASE || 'tienda tiny',
  password: process.env.DB_PASSWORD || "123456",
  max: 5,
  port: 5432,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
})

export default pool;
