import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AppSchemaModule } from './app-schema.module';
import 'dotenv/config';

@Module({
  imports: [
    TodoModule,
    AppSchemaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}