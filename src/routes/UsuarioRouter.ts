/**
 * @author Alysson Araújo
 * @updateDate 18/10/2022
 * @note
 * Revisar os códigos de status se estão certos de acordo com a proposta
 * do endpoint em questão!
 */

import { Router } from "express";
import {
  UpdateUsuarioEndereco,
  UsuarioInterface,
  UsuarioSemSenhaInterface,
} from "../interfaces/UsuarioInterface";
import { UsuarioController } from "../controllers/UsuarioController";

import {AuthController} from "../controllers/AuthController"
const usuarioRouter = Router();



usuarioRouter.post("/api/v1/usuario", async (req, res) => {
  try {
    const dataUsuario: UsuarioInterface = req.body;
    const usuarioController = new UsuarioController();
    const usuarioCreated:UsuarioSemSenhaInterface = await usuarioController.CreateUsuario(dataUsuario);
    return res.status(201).json(usuarioCreated);
  } catch (error) {
    return res.status(400).send("Não foi possível criar um novo usuário!");
  }
});

usuarioRouter.get("/api/v1/usuario", async (req, res) => {
  try {
    const usuarioController = new UsuarioController();
    const usuarioFind = await usuarioController.FindAllUsuario();

    return res.status(200).json(usuarioFind);
  } catch (error) {
    return res.status(404).send("Não foi possível retornar os usuarios");
  }
});

usuarioRouter.get("/api/v1/usuario/:cpf", async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    const usuarioController = new UsuarioController();
    const usuarioFind = await usuarioController.FindUsuarioByCpf(cpf_usuario);
    if (usuarioFind) return res.status(200).json(usuarioFind);
    else return res.status(404).send("Não foi possível retornar os usuarios");
  } catch (error) {
    return res.status(412).send("Não foi possível retornar os usuarios");
  }
});

usuarioRouter.delete("/api/v1/usuario/:cpf", (req,res,next) =>{
  new AuthController().VerifyToken(req,res,next)
}, async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    console.log(cpf_usuario);
    const usuarioController = new UsuarioController();
    const usuarioDeleted = await usuarioController.DeleteUsuarioByCpf(
      cpf_usuario
    );
    return res.status(200).json("Usuário deletado com sucesso!");
  } catch (error) {
    return res.status(404).send("Não foi possível remover o usuário");
  }
});

usuarioRouter.put("/api/v1/usuario/:cpf", (req,res,next) =>{
  new AuthController().VerifyToken(req,res,next)
}, async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    const pass = req.body.senha;
    console.log(cpf_usuario);
    const usuarioController = new UsuarioController();
    await usuarioController.UpdatePasswordUsuario(pass, cpf_usuario);
    return res.status(200).json({ mensagem: "senha alterada!" });
  } catch (error) {
    return res.status(404).send("Não foi possível remover o usuário");
  }
});

usuarioRouter.put("/api/v1/usuario/endereco/:cpf", (req,res,next) =>{
  new AuthController().VerifyToken(req,res,next)
}, async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    const endereco: UpdateUsuarioEndereco = req.body;
    console.log(cpf_usuario);
    const usuarioController = new UsuarioController();
    await usuarioController.UpdateEnderecoUsuario(endereco, cpf_usuario);
    return res.status(200).send("Endereço alterado com sucesso!");
  } catch (error) {
    return res.status(404).send("Não foi possível remover o usuário");
  }
});

usuarioRouter.put("/api/v1/usuario/email/:cpf", (req,res,next) =>{
  new AuthController().VerifyToken(req,res,next)
}, async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    const newEmail:string = req.body.email;
    console.log(newEmail)
    console.log(cpf_usuario);
    const usuarioController = new UsuarioController();
    await usuarioController.UpdateEmailUsuario(newEmail, cpf_usuario);
    return res.status(200).send("Email alterado com sucesso!");
  } catch (error) {
    return res.status(404).send("Não foi possível alterar o email!");
  }
});

usuarioRouter.put("/api/v1/usuario/:cpf/doador", (req,res,next) =>{
  new AuthController().VerifyToken(req,res,next)
}, async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    const pretencao:boolean = req.body.pretencao
    const usuarioController = new UsuarioController();
    await usuarioController.UpdateDoadorUsuario(pretencao, cpf_usuario);
    return res.status(200).send("Você é um novo doador!");
  } catch (error) {
    return res.status(404).send("Não foi possível alterar o email!");
  }
});

usuarioRouter.post("/api/v1/usuario/:cpf/receptor", async (req, res) => {
  try {
    const cpf_usuario = req.params.cpf;
    const data:string = req.body.data
    const id_orgao:string = req.body.id_orgao
    const usuarioController = new UsuarioController();
    await usuarioController.CreateReceptorUsuario(data, cpf_usuario,id_orgao);
    return res.status(200).send("Você entrou na fila do receptor!");
  } catch (error) {
    return res.status(404).send("Não foi possível criar o receptor!");
  }
});


export default usuarioRouter;