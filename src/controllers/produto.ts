import { Response, Request } from "express";
import CrudDepositoApi from "../adapter/api-deposito";

const depostioApi = new CrudDepositoApi('produto');

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
