import {Router} from 'express'
import {UsuarioInterface} from '@src/interfaces/UsuarioInterface'
import {UsuarioController} from '@src/controllers/UsuarioController'
const usuarioRouter = Router()

usuarioRouter.post('/api/v1/usuario',async (req,res) => {
   try {
    const dataUsuario:UsuarioInterface = req.body
    const usuarioController = new UsuarioController()
    const usuarioCreated = usuarioController.CreateUsuario(dataUsuario)
    res.status(201).json(usuarioCreated)
   } catch (error) {
    res.status(400).send("Não foi possível criar um novo usuário!")
   }
     
})

export default usuarioRouter;



