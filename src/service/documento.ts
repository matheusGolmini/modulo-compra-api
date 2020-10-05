import Crud from "../repository";
import { Tables } from "../enum/tables";
import { TipoDocumento } from "../enum/documento";

export async function criarDocumentoPorCompra(compra: string): Promise<void> {
    const instaDocumento = new Crud(Tables.DOCUMENTO)
    const documento = {
        tipo: TipoDocumento.COMPRA,
        compra
    }
    try {
        instaDocumento.create(documento) 
    } catch (error) {
        console.log("criarDocumentoPorCompra ---> ", error)
    }
}

export async function criarDocumentoEntradaEstoque(): Promise<void> {
    const instaDocumento = new Crud(Tables.DOCUMENTO)
    const documento = {
        tipo: TipoDocumento.ESTOQUE,
    }
    try {
        instaDocumento.create(documento) 
    } catch (error) {
        console.log("criarDocumentoPorCompra ---> ", error)
    }
}