export interface InstituicaoInterface{
    nome:string;
    cnpj:string;
    telefone:string
    email:string
    cep:string
    numero:number;
}

export interface UpdateInstituicao {
    nome:string;
    telefone:string;
    email:string
    cep:string
    numero:number
}

export interface PrismaInstituicaoController {
    CreateInstituicao: (instituicao:InstituicaoInterface) => Promise<void>
    FindAllInstituicoes: () => Promise<InstituicaoInterface[]>
    FindInstituicaoByCnpj: (cnpj:string) => Promise<InstituicaoInterface|null>
    UpdateInstituicao: (instituicao:InstituicaoInterface) => Promise<void>
    DeleteInstituicaoByCnpj:(cnpj:string) => Promise<void>
}