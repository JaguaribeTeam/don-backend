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
} from "@src/interfaces/InstituicaoInterface";
export class InstituicaoController implements PrismaInstituicaoController {
  async CreateInstituicao(instituicao: InstituicaoInterface) {
    const instituicaoNova = await prisma.instituicao.create({
      data: instituicao,
      select: {
        nome: true,
        cnpj: true,
        telefone: true,
        email: true,
        cep: true,
        logradouro: true,
        numero: true,
        complemento: true,
        bairro: true,
        cidade: true,
        estado: true,
      },
    });
    return instituicaoNova
  }
  async FindAllInstituicoes() {
    const insituicoes: InstituicaoInterface[] =
      await prisma.instituicao.findMany({
        select: {
          nome: true,
          cnpj: true,
          telefone: true,
          email: true,
          cep: true,
          logradouro: true,
          numero: true,
          complemento: true,
          bairro: true,
          cidade: true,
          estado: true,
        },
      });
    return insituicoes;
  }
  async DeleteInstituicaoByCnpj(cnpj: string) {
    await prisma.instituicao.delete({ where: { cnpj: cnpj } });
  }
  async FindInstituicaoByCnpj(cnpj: string) {
    return await prisma.instituicao.findUnique({
      where: { cnpj: cnpj },
      select: {
        nome: true,
        cnpj: true,
        telefone: true,
        email: true,
        cep: true,
        logradouro: true,
        numero: true,
        complemento: true,
        bairro: true,
        cidade: true,
        estado: true,
      },
    });
  }
  async UpdateInstituicao(instituicao: InstituicaoInterface) {
    await prisma.instituicao.update({
      where: {
        cnpj: instituicao.cnpj,
      },
      data: instituicao,
    });
  }
}
