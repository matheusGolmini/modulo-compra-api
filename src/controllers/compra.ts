import { Response, Request } from "express";
import Crud from "../repository";
import { Tables } from "../enum/tables"
import { VerificarProduto } from "../service/produto";
import { verificarCotacao, verificarMelhorCotacao } from "../service/cotacao";
import { diminuirDataPorDia } from "../utils/data";
import { criarDocumentoPorCompra } from "../service/documento";

const crudRepository = new Crud(Tables.COMPRA)

export async function criar(req: Request, res: Response) {
    const compra = req.body
    const validProduto = await VerificarProduto(compra.produto)
    if(!validProduto) return res.status(200).json({ message: "produto não encontrado" })
    
    const veriCotacao = await verificarCotacao(compra.produto, compra.data_compra, diminuirDataPorDia(compra.data_compra, 7))

    if(!veriCotacao) return res.status(200).json({ message: "não possui cotação suficiente para fazer essa compra" })

    const melhorCotacao: any = verificarMelhorCotacao(veriCotacao);
    if(!melhorCotacao) return res.status(405).json({ message: "erro no sistema" })

    compra.cotacao = melhorCotacao.id
    const result = await crudRepository.create(compra)
    if(!result) return res.status(404).json({message: "não foi possivel cadastrar a compra no sistema"})
    res.status(202).json(result)
    criarDocumentoPorCompra(result.id)
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