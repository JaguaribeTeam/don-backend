import { Request, Response } from 'express'
import { prisma } from '@src/prisma/prisma'
import { OrgaoInterface, PrismaOrgaoController } from '../interfaces/OrgaoInterface'

export class OrgaoController implements PrismaOrgaoController {
    
    CreateOrgao = async (req: Request, res: Response) => {
        const { nome } = req.body;

        try {
            const orgao = await prisma.orgao.create({
                data: {
                    nome
                },
                select: {
                    id_orgao: true,
                    nome: true
                }
            });
            
            return res.status(201).json(orgao);
        } catch (err) {
            return res.status(400).json({ message: 'Erro ao salvar um órgão' });
        }
        
    }

    FindAllOrgao = async (req: Request, res: Response) => {
        const orgaos = await prisma.orgao.findMany({
            select: {
                id_orgao: true,
                nome: true
            }
        });

        return res.status(200).json(orgaos);
    }
    
    FindOrgaoById = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        const orgao = await prisma.orgao.findUnique({
            where: {
                id_orgao: id
            }, select: {
                id_orgao: true,
                nome: true
            }
        });

        if (!orgao) {
            return res.status(404).json({ message: 'Órgão não encontrado' });
        }

        return res.status(200).json(orgao);
    }

    UpdateOrgao = async (req: Request, res: Response) => {
        const { id } = req.params;

        const { nome } = req.body;
        
        const orgaoExistente = await prisma.orgao.findUnique({
            where: {
                id_orgao: id
            }
        });

        if (!orgaoExistente) {
            return res.status(404).json({ message: 'Órgão não encontrado' })
        }

        try {
            const orgaoAlterado = await prisma.orgao.update({
                where: {
                    id_orgao: id
                },
                data: {
                    nome
                },
                select: {
                    id_orgao: true,
                    nome: true
                }
            });
    
            return res.status(200).json(orgaoAlterado);
        } catch (err) {
            return res.status(400).json({ message: 'Erro ao tentar alterar um órgão' })
        }
    }

    DeleteOrgao = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        const orgao = await prisma.orgao.findUnique({
            where: {
                id_orgao: id
            }
        });

        if (!orgao) {
            return res.status(404).json({ message: 'Órgão não encontrado' })
        }

        try {
            await prisma.orgao.delete({
                where: {
                    id_orgao: orgao.id_orgao
                }
            });
    
            return res.status(200).json({ message: 'Órgão deletado com sucesso' });
        } catch (err) {
            return res.status(400).json({ message: 'Erro ao tentar deletar um órgão' });
        }
    }

}