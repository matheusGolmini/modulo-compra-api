import api from '../config/axios'

export async function verificarProduto(produto: string) : Promise<boolean> {
    try {
        const res = await api.get(`produto/${produto}`)
        if(!!res) return true
        return false
    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}

export async function buscarProduto() : Promise<boolean> {
    try {
        const res = await api.get(`produto`)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}

export async function buscarProdutoId(produtoId: string) : Promise<boolean> {
    try {
        const res = await api.get(`produto/${produtoId}`)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}