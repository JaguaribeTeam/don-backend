import { Request, Response } from 'express'
import { prisma } from '../prisma/prisma'
import {PrismaDoadorController, CreateDoador,FindDoador} from '../interfaces/DoadorInterface';

export class DoadorController implements PrismaDoadorController {
    
    async CreateDoador(data:CreateDoador) {
        await prisma.doador.create({data:{
            id_usuario:data.id_usuario,
            pretencao_doacao:data.pretencao_doacao
        }})
    }
    async FindAllDoador() {
        const listDoador:FindDoador[] = await prisma.doador.findMany({select:{id_doador:true,
        id_usuario:true,
        pretencao_doacao:true}})
        return listDoador
    }
    async FindDoadorByIdUsuario (id_usuario: string) {
        const doador = await prisma.doador.findUnique({where:{
            id_usuario:id_usuario
        },
    select:{
        id_doador:true,
        id_usuario:true,
        pretencao_doacao:true
    }})
    return doador
    }
    async DeleteDoadorByUsuario (id_usuario: string) {
        await prisma.doador.delete({where:{
            id_usuario:id_usuario
        }})
    }
    async UpdatePretencaoDoacao (swap: boolean, id_usuario:string) {
        const doador = await prisma.doador.update({where:{id_doador:id_usuario},data:{
            pretencao_doacao:swap
        }})
        return doador
    }
}