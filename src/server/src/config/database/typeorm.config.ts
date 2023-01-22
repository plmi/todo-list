import 'dotenv/config';
import { DataSource } from 'typeorm';
import { TodoItem } from '../../entities/todo-item.entity';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config({path: '../../.env'});
const configService = new ConfigService();

console.error(__dirname);
console.error(configService.get('TYPEORM_HOSTNAME'));

// TODO: merge with config in database.module.ts
export const connectionSource = new DataSource({
    type: 'postgres',
    host: configService.get('TYPEORM_HOSTNAME'),
    port: configService.get('TYPEORM_PORT'),
    username: configService.get('TYPEORM_USERNAME'),
    password: configService.get('TYPEORM_PASSWORD'),
    database: configService.get('TYPEORM_DATABASE'),
    synchronize: false,
    migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
    entities: [TodoItem]
});
