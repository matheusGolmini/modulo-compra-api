import Crud from "../repository";
import { Tables } from "../enum/tables";

export async function criarDocumentoPorCompra(compra: string): Promise<void> {
    const instaDocumento = new Crud(Tables.DOCUMENTO)
    const documento = {
        tipo: "Emissão da ordem de fornecimento",
        compra
    }
    try {
        instaDocumento.create(documento) 
    } catch (error) {
        console.log("criarDocumentoPorCompra ---> ", error)
    }
}
    