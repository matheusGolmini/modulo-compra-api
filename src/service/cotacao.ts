import { getRepository } from "typeorm"
import { Tables } from "../enum/tables"

export async function verificarCotacao(produto: string, dataCompra: string, dataFinal: string) {
    try {
        const instaCotacao = getRepository(Tables.COTACAO);
        const result = await instaCotacao.query(
            `select * from cotacao
            where produto_id = '${produto}' 
            and "created_At" between '${dataFinal}' and '${dataCompra}'`
        );

        if(result.length < 3){
            return false
        }
        return result
    } catch (error) {
        console.log(`VerificarCotacao ---> ${error}`)
        return false
    }
}

export function verificarMelhorCotacao(cotacao: any) {
    try {
        let melhorCotacao: any;
        cotacao.forEach((element: any) => {
            if(!melhorCotacao || melhorCotacao.precoUn > element.precoUn){
                melhorCotacao = element
            }
        });
        return melhorCotacao
    } catch (error) {
        console.log(`VerificarCotacao ---> ${error}`)
        return false
    }
}



 