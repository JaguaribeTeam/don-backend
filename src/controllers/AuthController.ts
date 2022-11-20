import { prisma } from "../prisma/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import {
  PrismaAuthController,
  payloadUsuario,
} from "../interfaces/AuthInterface";
import { NextFunction, Request, Response } from "express";

export class AuthController implements PrismaAuthController {
  async Login(email: string, senha: string) {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    if (!usuarioExistente) {
      return;
    }

    const senhaCorreta = await bcrypt.compare(senha, usuarioExistente.senha);

    if (!senhaCorreta) {
      return;
    }

    const token = jwt.sign(
      {
        id: usuarioExistente.id_usuario,
        admin: usuarioExistente.admin,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "4h",
      }
    );

    const usuarioAutenticado = {
      email: usuarioExistente.email,
      nome: usuarioExistente.nome,
      admin: usuarioExistente.admin,
    };

    return {
      usuarioAutenticado,
      token,
    };
  }
  VerifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.query.token as string;
      const verificarToken = jwt.verify(token, process.env.JWT_KEY as string);

      console.log("Token válido");
      next();
    } catch (error) {
      console.log("Token inválido");
      res.status(401).send("Token inválido");
    }
  }
}
