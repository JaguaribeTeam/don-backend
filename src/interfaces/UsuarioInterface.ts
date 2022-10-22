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

export interface UpdateUsuario {
  nome?: string;
  cpf?: string;
  email?: string;
  senha?: string;
  cep?: string;
  logradouro?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}

export interface UpdateUsuarioEndereco {
  cep?: string;
  logradouro?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}

export interface PrismaUsuarioController {
    CreateUsuario: (usuario:UsuarioInterface, res:Response) => Promise<UsuarioInterface>;
    FindAllUsuario: () => Promise<UsuarioInterface[]>;
    DeleteUsuarioByCpf: (cpf:string) => Promise<UsuarioInterface>;
    FindUsuarioByCpf: (cpf:string) => Promise<UsuarioInterface|null>;
    UpdatePasswordUsuario:(pass:string,cpf:string) => Promise<void>;
    UpdateEnderecoUsuario:(endereco:UpdateUsuarioEndereco, cpf:string) => Promise<UsuarioInterface>;
    UpdateEmailUsuario:(email:string, cpf:string) => Promise<void>;
}