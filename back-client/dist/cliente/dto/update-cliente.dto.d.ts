import { CreateClienteDto } from './create-cliente.dto';
declare const UpdateClienteDto_base: import("@nestjs/common").Type<Partial<CreateClienteDto>>;
export declare class UpdateClienteDto extends UpdateClienteDto_base {
    name: string;
    email: string;
    cpf: string;
    tel: string;
    premium: boolean;
    date: string;
}
export {};
