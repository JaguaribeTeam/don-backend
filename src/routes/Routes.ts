import usuarioRouter from "./UsuarioRouter";
import orgaoRouter from "./OrgaoRouter";
import { Router } from "express";

const routes = Router()

routes.use(usuarioRouter)
routes.use(orgaoRouter)

export default routes