import { Response, Request } from "express";
import Crud from "../repository";
import { Tables } from "../enum/tables"
import { entradaDeposito,EntradaDeposito } from "../service/estoque";
import { criarDocumentoEntradaEstoque } from "../service/documento";

const crudRepository = new Crud(Tables.ESTOQUE)

export async function criar(req: Request, res: Response) {
    const entrada: EntradaDeposito = req.body

    const result: any = await entradaDeposito(entrada)

    if(!result || !result.value) return res.status(200).json(result)
    res.status(202).json(result)
    criarDocumentoEntradaEstoque()
}

export async function buscar(req: Request, res: Response) {
    const result = await crudRepository.findAll()
    if(!result) return res.status(404).json({message: "não possui fornecedores"})
    return res.status(202).json(result)
}

export async function buscarPorId(req: Request, res: Response) {
    const { id } = req.params
    const result = await crudRepository.findById(String(id))
    if(!result) return res.status(404).json({message: "fornecedor não encontrada"})
    return res.status(202).json(result)
}

export async function deletar(req: Request, res: Response) {
    const { id } = req.params
    const result = await crudRepository.delete(String(id))
    if(!result) return res.status(404).json({message: "não foi possivel deletar o fornecedor"})
    return res.status(202).json(result)
}