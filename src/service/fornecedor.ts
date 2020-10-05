import api from '../config/axios'

export async function verificarFornecedor(fornecedor: string) : Promise<boolean> {
    try {
        const res = await api.get(`fornecedor/${fornecedor}`)
        if(!!res) return true
        return false
    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}

export async function buscarFornecedor() : Promise<boolean> {
    try {
        const res = await api.get(`fornecedor`)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}

export async function buscarFornecedorId(fornecedorId: string) : Promise<boolean> {
    try {
        const res = await api.get(`fornecedor/${fornecedorId}`)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}