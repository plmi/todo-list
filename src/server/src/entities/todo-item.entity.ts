import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'TodoItem' })
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  priority: number;

  @Column()
  locked: boolean;

  @Column()
  done: boolean;
}