/**
 * @note
 * @author Alysson Araújo
 * @createdDate 20/10/2022
 * updatedDate 20/10/2022
 *
 * Será preciso entrar a autenticação do usuário via token para que
 * dá mais segurança e veracidade para quem está modificando os dados
 */

 import { prisma } from "@src/prisma/prisma";
 import {
   PrismaInstituicaoController,
   InstituicaoInterface,
   UpdateInstituicao
 } from "@src/interfaces/InstituicaoInterface";
export class InstituicaoController implements PrismaInstituicaoController{
    async CreateInstituicao (instituicao: InstituicaoInterface){
        await prisma.instituicao.create({data:instituicao})
    }
    async FindAllInstituicoes () {
        return await prisma.instituicao.findMany({select:{
            nome:true,
            cnpj:true,
            telefone:true,
            email:true,
            cep:true,
            numero:true
        }})
    }
    async DeleteInstituicaoByCnpj (cnpj: string) {
        await prisma.instituicao.delete({where:{cnpj:cnpj}})
    }
    async FindInstituicaoByCnpj (cnpj: string){
        return await prisma.instituicao.findUnique({where:{cnpj:cnpj},select:{
            nome:true,
            cnpj:true,
            telefone:true,
            email:true,
            cep:true,
            numero:true
        }
        })
    }
    async UpdateInstituicao (instituicao: InstituicaoInterface){
        await prisma.instituicao.update({where:{
            cnpj:instituicao.cnpj
        },data:instituicao})
    }
}