import { NextFunction, Request, Response } from "express"

export interface PrismaAuthController {
    Login: (email: string, senha: string) => Promise<Object | undefined>
    VerifyToken:(req:Request, res:Response, next:NextFunction) => void
}

export interface payloadUsuario{
    user: {
        _id: string,
        nome: string,
        email: string,
        funcao: number,
        senha: string,
        __v: number
    },
    iat: number
}