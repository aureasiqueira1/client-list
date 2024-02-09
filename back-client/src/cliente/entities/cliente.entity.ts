/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 11 })
  tel: string;

  @Column({ type: 'bool' })
  premium: boolean;

  @Column({ length: 10 })
  date: string;
}
