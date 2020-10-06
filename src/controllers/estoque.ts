import { Response, Request } from "express";
import { entradaDeposito,EntradaDeposito } from "../service/estoque";
import { criarDocumentoEntradaEstoque } from "../service/documento";
import CrudDepositoApi from "../adapter/api-deposito";

const depostioApi = new CrudDepositoApi('deposito');

export async function criar(req: Request, res: Response) {
    const entrada: EntradaDeposito = req.body

    const result: any = await entradaDeposito(entrada)

    if(!result || !result.value) return res.status(200).json(result)
    res.status(202).json(result)
    criarDocumentoEntradaEstoque()
}

export async function buscar(req: Request, res: Response) {
    const result = await depostioApi.findAll()
    if(!result) return res.status(404).json({message: "não possui fornecedores"})
    return res.status(202).json(result)
}

export async function buscarPorId(req: Request, res: Response) {
    const { id } = req.params
    const result = await depostioApi.findById(id)
    if(!result) return res.status(404).json({message: "fornecedor não encontrada"})
    return res.status(202).json(result)
}

