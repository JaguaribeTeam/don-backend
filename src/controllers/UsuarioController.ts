import {prisma} from '@src/prisma/prisma'
import {PrismaUsuarioController,UsuarioInterface} from '@src/interfaces/UsuarioInterface'


export class UsuarioController implements PrismaUsuarioController{
    constructor(){}
    async CreateUsuario (usuario:UsuarioInterface){
        await prisma.usuario.create({data:usuario
})
    }
}
