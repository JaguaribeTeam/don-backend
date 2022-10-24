import usuarioRouter from "./UsuarioRouter";
import orgaoRouter from "./OrgaoRouter";
import instituicaoRouter from './InstituicaoRouter';
import authRouter from './AuthRouter'
import { Router } from "express";

const routes = Router()

routes.use(usuarioRouter)
routes.use(orgaoRouter)
routes.use(instituicaoRouter)
routes.use(authRouter)

export default routes