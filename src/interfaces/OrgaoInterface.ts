import { Request, Response } from 'express'

export interface OrgaoInterface {
    nome: string
}

export interface OrgaoDoador {
    id_orgao:string
    id_doador:string
}

export interface OrgaoReceptor {
    id_orgao:string
    id_receptor:number
}

export interface PrismaOrgaoController {
    FindAllOrgao: (req: Request, res: Response) => Promise<Response>
    CreateOrgao: (req: Request, res: Response) => Promise<Response>
    UpdateOrgao: (req: Request, res: Response) => Promise<Response>
    DeleteOrgao: (req: Request, res: Response) => Promise<Response>
    FindOrgaoById: (req: Request, res: Response) => Promise<Response>
    LinkOrgaoToDoadorController: (req: Request, res: Response) => Promise<Response>
    LinkOrgaoToReceptorController: (req: Request, res: Response) => Promise<Response>
}