/* eslint-disable prettier/prettier */
import { IsBoolean, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  tel: string;

  @IsBoolean()
  premium: boolean;

  @IsString()
  date: string;
}
