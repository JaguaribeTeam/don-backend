export interface InstituicaoInterface {
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;

}

export interface InstituicaoOrgaoCreate{
  id_instituicao:string
  id_orgao:string
}

export interface PrismaInstituicaoController {
  CreateInstituicao: (instituicao: InstituicaoInterface) => Promise<InstituicaoInterface>;
  FindAllInstituicoes: () => Promise<InstituicaoInterface[]>;
  FindInstituicaoByCnpj: (cnpj: string) => Promise<InstituicaoInterface | null>;
  UpdateInstituicao: (instituicao: InstituicaoInterface) => Promise<void>;
  DeleteInstituicaoByCnpj: (cnpj: string) => Promise<void>;
  LinkInstituicaoToOrgaoController: (datas:InstituicaoOrgaoCreate) => Promise<void>
}
