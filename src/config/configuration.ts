import * as dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config();

export const env = {
  HOST_PORT: parseInt(process.env.HOST_PORT ?? '3000', 10),
  CLIENT_LINK: process.env.CLIENT_LINK ?? 'http://localhost:5173',
  SERVER_LINK: process.env.SERVER_LINK ?? 'http://localhost:3000',

  DATABASE_HOST: process.env.DATABASE_HOST ?? 'localhost',
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  DATABASE_USER: process.env.DATABASE_USER ?? 'user',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ?? 'password',
  DATABASE_NAME: process.env.DATABASE_NAME ?? 'database',
};
