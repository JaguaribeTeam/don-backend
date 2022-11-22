/**
 * @note
 * @author Alysson Araújo
 * @updateDate 18/10/2022
 *
 * Será preciso entrar a autenticação do usuário via token para que
 * dá mais segurança e veracidade para quem está modificando os dados
 */

import { prisma } from "../prisma/prisma";
import {
  PrismaUsuarioController,
  UpdateUsuarioEndereco,
  UsuarioInterface,
  UsuarioSemSenhaInterface,
} from "../interfaces/UsuarioInterface";
import { hash } from 'bcryptjs';

export class UsuarioController implements PrismaUsuarioController {
  async CreateUsuario(usuario: UsuarioInterface) {
    const { senha } = usuario;
    const senhaEncriptada = await hash(senha, 8);
    
    const usuarioNovo:UsuarioSemSenhaInterface = await prisma.usuario.create({ data: {
      ...usuario,
      senha: senhaEncriptada,
      doador:{create:{pretencao_doacao:usuario.pretencao_doacao || false}}
    }, select:{admin: true,
      bairro: true,
      cep: true,
      cidade: true,
      complemento: true,
      cpf: true,
      email: true,
      estado: true,
      nome: true,
      logradouro: true,
      numero: true,
      tipo_sanguineo: true,
      dt_nascimento: true,

    } });
    return usuarioNovo
  }
  async FindAllUsuario(): Promise<UsuarioSemSenhaInterface[]> {
    const usuarios: UsuarioSemSenhaInterface[] = await prisma.usuario.findMany({
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
        logradouro: true,
        numero: true,
        tipo_sanguineo: true,
        dt_nascimento: true,
      },
    });
    console.log("usuarios: \n" + usuarios);
    return usuarios;
  }
  async FindUsuarioByCpf(cpf: string) {
    const usuario = await prisma.usuario.findUnique({
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
        logradouro: true,
        numero: true,
        tipo_sanguineo: true,
        dt_nascimento: true,
      },
    });
    return usuario;
  }

  /**
   * @note
   * @author Alysson Araújo
   * Não pode retornar os dados do usuário. Isso está dessa forma para uma
   * melhor visualização das funcionalidades do controller.
   */
  async DeleteUsuarioByCpf(cpf: string) {
    const deleteOrNot: UsuarioSemSenhaInterface = await prisma.usuario.delete({
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
        logradouro: true,
        numero: true,
        tipo_sanguineo: true,
        dt_nascimento: true,
      },
    });
    return deleteOrNot;
  }

  async UpdatePasswordUsuario(pass: string, cpf: string) {
    await prisma.usuario.update({
      where: {
        cpf: cpf,
      },
      data: {
        senha: pass,
      },
    });
  }

  async UpdateEnderecoUsuario(endereco: UpdateUsuarioEndereco, cpf: string) {
    const usuario = await prisma.usuario.update({
      where: { cpf: cpf },
      data: {
        cep: endereco.cep,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        numero: endereco.numero,
        logradouro: endereco.logradouro,
        estado: endereco.estado,
        complemento: endereco.complemento,
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
    });    return usuario;
  }
  async UpdateEmailUsuario(email: string, cpf: string) {
    await prisma.usuario.update({
      where: { cpf: cpf },
      data: { email: email },
      select: { nome: true },
    });
  }
  async UpdateDoadorUsuario (pretencao: boolean, cpf: string) {
    await prisma.usuario.update({where:{cpf:cpf},data:{
      doador:{update:{pretencao_doacao:pretencao}},
    }})
    
  }
  
  async UpdateReceptorUsuario (data: string, cpf: string) {
    await prisma.usuario.update({where:{cpf:cpf},data:{
      receptor:{update:{tempo_fila_espera:data}},
    }})
  }

  async CreateReceptorUsuario (date: string, cpf: string, id_orgao:string) {
    await prisma.usuario.update({where:{cpf:cpf},
    data:{
      receptor:{create:{tempo_fila_espera:date,receptor_orgao:{create:{id_orgao:id_orgao}}}}
    }})
  }
}