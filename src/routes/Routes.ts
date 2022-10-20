import usuarioRouter from "./UsuarioRouter";
import orgaoRouter from "./OrgaoRouter";
import instituicaoRouter from './InstituicaoRouter'
import { Router } from "express";

const routes = Router()

routes.use(usuarioRouter)
routes.use(orgaoRouter)
routes.use(instituicaoRouter)

export default routes