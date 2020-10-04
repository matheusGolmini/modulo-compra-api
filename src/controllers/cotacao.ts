import { Response, Request } from "express";
import Crud from "../repository";
import { Tables } from "../enum/tables"
import { VerificarProduto } from "../service/produto";

const crudRepository = new Crud(Tables.COTACAO)

export async function criar(req: Request, res: Response) {
    const cotacao = req.body
    const validProduto = await VerificarProduto(cotacao.produto)
    if(!validProduto) return res.status(200).json({ message: "produto não encontrado" })
    const result = await crudRepository.create(cotacao)
    if(!result) return res.status(404).json({message: "não foi possivel cadastrar o fornecedor no sistema"})
    return res.status(202).json(result)
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