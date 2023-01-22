import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'TodoItem' })
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  done: boolean;
}