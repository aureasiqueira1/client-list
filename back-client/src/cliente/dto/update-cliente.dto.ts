/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
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
