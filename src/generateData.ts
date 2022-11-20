import Chance from 'chance'
import {prisma} from './prisma/prisma'

const chanceObj = new Chance()
const re = 'A-|B-|AB-|O-|A+|B+|O+|AB+';
const arrayTypes = re.split('|')


export async function generateUsuario() {
    for (let index = 0; index <= 50; index++) {
        await prisma.usuario.create({data:{
            nome:chanceObj.name(),
            cpf:chanceObj.cpf(),
            email:chanceObj.email(),
            senha:"teste12345",
            dt_nascimento:chanceObj.birthday({string: true, american: false}).toString(),
            tipo_sanguineo:arrayTypes[chanceObj.integer({min:0,max:7})],
            cep:`${chanceObj.integer({min:10000,max:99999})}-${chanceObj.integer({min:100,max:999})}`,
            logradouro:chanceObj.string(),
            numero:chanceObj.integer({min:0,max:9999}),
            complemento:chanceObj.string(),
            bairro:chanceObj.last(),
            cidade:chanceObj.city(),
            estado:chanceObj.state(),
        }})
    }
}