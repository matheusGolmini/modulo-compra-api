import api from '../config/axios'

export async function VerificarProduto(produto: string) : Promise<boolean> {
    try {
        const res = await api.get(`produto/${produto}`)
        if(!!res) return true
        return false
    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}