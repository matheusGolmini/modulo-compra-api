import { Response, Request } from "express";
import { buscarProduto, buscarProdutoId } from "../service/produto";


export async function buscar(req: Request, res: Response) {
    const result = await buscarProduto()
    if(!result) return res.status(404).json({message: "não possui fornecedores"})
    return res.status(202).json(result)
}

export async function buscarPorId(req: Request, res: Response) {
    const { id } = req.params
    const result = await buscarProdutoId(id)
    if(!result) return res.status(404).json({message: "fornecedor não encontrada"})
    return res.status(202).json(result)
}
