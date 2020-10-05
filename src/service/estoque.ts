import api from '../config/axios'

export interface EntradaDeposito {
    nota: {
        fornecedor: string,
        valor: number,
        quantidade: number,
        tipo_evento: string,
        produto: string,
        deposito: string
    }
}

export async function entradaDeposito(entrada: EntradaDeposito) : Promise<boolean> {
    try {
        const res = await api.post(`documento`, entrada)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}

export async function buscarDeposito() : Promise<boolean> {
    try {
        const res = await api.get(`deposito`)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}

export async function buscarDepositoId(depositoId: string) : Promise<boolean> {
    try {
        const res = await api.get(`deposito/${depositoId}`)
        return res.data

    } catch (error) {
        console.log(`VerificarProduto --- > ${error}`)
        return false
    }
}