import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '../config/configuration';
import { Table } from './table-entity/table-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DATABASE_HOST,
      port: env.DOCKER_PORT ?? 5432,
      username: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
      entities: [Table],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
