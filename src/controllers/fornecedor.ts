import { Response, Request } from "express";
import { buscarFornecedor,buscarFornecedorId } from "../service/fornecedor";

export async function buscar(req: Request, res: Response) {
    const result = await buscarFornecedor()
    if(!result) return res.status(404).json({message: "não possui lojas"})
    return res.status(202).json(result)
}

export async function buscarPorId(req: Request, res: Response) {
    const { id } = req.params
    const result = await buscarFornecedorId(id)
    if(!result) return res.status(404).json({message: "loja não encontrada"})
    return res.status(202).json(result)
}
