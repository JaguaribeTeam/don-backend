import usuarioRouter from "./UsuarioRouter";
import { Router } from "express";

const routes = Router()

routes.use(usuarioRouter)

export default routes