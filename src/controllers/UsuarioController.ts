import { prisma } from "@src/prisma/prisma";
import {
  PrismaUsuarioController,
  UsuarioInterface,
} from "@src/interfaces/UsuarioInterface";
import { Response } from "express";

export class UsuarioController implements PrismaUsuarioController {
  async CreateUsuario(usuario: UsuarioInterface) {
    await prisma.usuario.create({ data: usuario });
  }
  async FindUsuario(): Promise<UsuarioInterface[]> {
    const usuarios: UsuarioInterface[] = await prisma.usuario.findMany({
      select: {
        admin: true,
        bairro: true,
        cep: true,
        cidade: true,
        complemento: true,
        cpf: true,
        email: true,
        estado: true,
        nome: true,
        senha: true,
        logradouro: true,
        numero: true,
        tipo_sanguineo: true,
        dt_nascimento: true,
      },
    });
    console.log("usuarios: \n" + usuarios);
    return usuarios;
  }
  async DeleteUsuarioByCpf(cpf: string) {
    const deleteOrNot: UsuarioInterface = await prisma.usuario.delete({
      where: {
        cpf: cpf,
      },
      select: {
        admin: true,
        bairro: true,
        cep: true,
        cidade: true,
        complemento: true,
        cpf: true,
        email: true,
        estado: true,
        nome: true,
        senha: true,
        logradouro: true,
        numero: true,
        tipo_sanguineo: true,
        dt_nascimento: true,
      },
    });
    return deleteOrNot;
  }
}
