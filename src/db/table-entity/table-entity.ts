import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table')
export class Table {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  code: number;

  @Column()
  date: Date;
}
