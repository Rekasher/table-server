import * as dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config();

export const env = {
  //HOST
  SERVER_LINK: process.env.SERVER_LINK,
  CLIENT_LINK: process.env.CLIENT_LINK,
  HOST_PORT: process.env.HOST_PORT,

  //DATABASE
  DATABASE_HOST: process.env.DATABASE_HOST ?? 'localhost',
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  DATABASE_DIALECT: process.env.DATABASE_DIALECT ?? 'postgres',
  DATABASE_USER: process.env.DATABASE_USER ?? 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ?? '',
  DATABASE_NAME: process.env.DATABASE_NAME ?? 'table',
};
