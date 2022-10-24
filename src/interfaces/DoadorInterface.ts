export interface FindDoador {
  id_doador:string
  pretencao_doacao:boolean
  id_usuario:string
}

export interface CreateDoador {
  id_usuario:string
  pretencao_doacao:boolean
}

export interface PrismaDoadorController {
    CreateDoador: (data:CreateDoador) => Promise<void>;
    FindAllDoador: () => Promise<FindDoador[]>;
    FindDoadorByIdUsuario: (id_usuario:string) => Promise<FindDoador|null>
    UpdatePretencaoDoacao: (swap:boolean, id_usuario:string) => Promise<FindDoador>
    DeleteDoadorByUsuario: (id_usuario:string) => Promise<void>
}