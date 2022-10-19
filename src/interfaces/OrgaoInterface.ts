import { Request, Response } from 'express'

export interface OrgaoInterface {
    nome: string
}

export interface PrismaOrgaoController {
    FindAllOrgao: (req: Request, res: Response) => Promise<Response>
    CreateOrgao: (req: Request, res: Response) => Promise<Response>
    UpdateOrgao: (req: Request, res: Response) => Promise<Response>
    DeleteOrgao: (req: Request, res: Response) => Promise<Response>
    FindOrgaoById: (req: Request, res: Response) => Promise<Response>
}