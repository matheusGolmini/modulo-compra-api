import Crud from "../repository";
import { Tables } from "../enum/tables";

const crudRepository = new Crud(Tables.PRODUTO)

export async function VerificarProduto(produto: string) : Promise<boolean> {
    try {
        const res = crudRepository.findById(produto)
        if(!!res) return true
        return false
    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}