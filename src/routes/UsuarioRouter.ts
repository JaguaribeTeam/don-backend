import { Router } from "express";
import { UsuarioInterface } from "@src/interfaces/UsuarioInterface";
import { UsuarioController } from "@src/controllers/UsuarioController";
const usuarioRouter = Router();

usuarioRouter.post("/api/v1/usuario", async (req, res) => {
  try {
    const dataUsuario: UsuarioInterface = req.body;
    const usuarioController = new UsuarioController();
    const usuarioCreated = usuarioController.CreateUsuario(dataUsuario);
    res.status(201).json(usuarioCreated);
  } catch (error) {
    res.status(400).send("Não foi possível criar um novo usuário!");
  }
});

usuarioRouter.get("/api/v1/usuario", async (req, res) => {
  try {
    const usuarioController = new UsuarioController();
    const usuarioFind = await usuarioController.FindUsuario();
    res.status(201).json(usuarioFind);
  } catch (error) {
    res.status(404).send("Não foi possível retornar os usuarios");
  }
});

usuarioRouter.delete("/api/v1/usuario:cpf", async (req, res) => {
  try {
   const cpf = req.body.cpf;
    const usuarioController = new UsuarioController();
    const usuarioDeleted = await usuarioController.DeleteUsuarioByCpf(cpf);
    res.status(201).json(usuarioDeleted);
  } catch (error) {
    res.status(404).send("Não foi possível retornar os usuarios");
  }
});

export default usuarioRouter;
