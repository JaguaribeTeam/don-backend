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
  pretencao_doacao?: boolean
  tempo_fila_espera?: Date 
}

export interface UsuarioSemSenhaInterface {
  nome: string;
  cpf: string;
  email: string;
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
  pretencao_doacao?: boolean
  tempo_fila_espera?: Date 
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
  CreateUsuario: (
    usuario: UsuarioInterface,
    res: Response
  ) => Promise<UsuarioSemSenhaInterface>;
  FindAllUsuario: () => Promise<UsuarioSemSenhaInterface[]>;
  DeleteUsuarioByCpf: (cpf: string) => Promise<UsuarioSemSenhaInterface>;
  FindUsuarioByCpf: (cpf: string) => Promise<UsuarioSemSenhaInterface | null>;
  UpdatePasswordUsuario: (pass: string, cpf: string) => Promise<void>;
  UpdateEnderecoUsuario: (
    endereco: UpdateUsuarioEndereco,
    cpf: string
  ) => Promise<UsuarioSemSenhaInterface>;
  UpdateEmailUsuario: (email: string, cpf: string) => Promise<void>;
  UpdateDoadorUsuario: (pretencao: boolean, cpf: string) => Promise<void>;
  UpdateReceptorUsuario: (data: string, cpf: string) => Promise<void>;
  CreateReceptorUsuario: (
    date: string,
    cpf: string,
    id_orgao: string
  ) => Promise<void>;
}
