import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Entry } from '../../entries/entities/entry.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  //Category title-name
  @Column()
  title: string;

  //Relationship  one to many
  // The second parameter tells TypeORM that the "category" property in Entry is the inverse side.
  @OneToMany(() => Entry, (entry) => entry.category)
  entries: Entry[];
}
