import { Response } from "express";

export interface UsuarioInterface {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  dt_nascimento: string;
  tipo_sanguineo: string;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  admin: boolean;
}

export interface PrismaUsuarioController {
    CreateUsuario: (usuario:UsuarioInterface, res:Response) => Promise<void>;
    FindUsuario: () => Promise<UsuarioInterface[]>;
    DeleteUsuarioByCpf: (cpf:string) => Promise<UsuarioInterface>;
}