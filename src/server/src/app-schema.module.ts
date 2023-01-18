import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoItem } from "./entities/todo-item.entity";
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOSTNAME,
      port: Number(String(process.env.TYPEORM_PORT)),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: true,
      autoLoadEntities: false,
      entities: [TodoItem],
      retryAttempts: 2,
      retryDelay: 1000,
    }),
  ],
})
export class AppSchemaModule {}