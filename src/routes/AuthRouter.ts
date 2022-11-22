import { Router } from 'express';
import { AuthController } from '../controllers/AuthController'

const authRouter = Router();

authRouter.post('/api/v1/login', async (req, res) => {
    const { email, senha } = req.body;
    const authController = new AuthController();

    const usuarioAutenticado = await authController.Login(email, senha);

    if (usuarioAutenticado) {
        return res.json( { usuarioAutenticado, message: 'Autenticação realizada com sucesso!' });
    } else {
        return res.status(400).json({ message: 'Erro na autenticação!' });
    }
});

authRouter.post('/api/v1/auth', async (req, res) => {
    const token = req.query.token
    const { email, senha } = req.body;
    const authController = new AuthController();

    const usuarioAutenticado = await authController.Login(email, senha);

    if (usuarioAutenticado) {
        return res.json( { usuarioAutenticado, message: 'Autenticação realizada com sucesso!' });
    } else {
        return res.status(400).json({ message: 'Erro na autenticação!' });
    }
});


export default authRouter;