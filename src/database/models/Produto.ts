import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, OneToMany } from "typeorm";
import ProdutoEstoque from "./ProdutoEstoque";


@Entity('produto')
export default class Produto extends DefaultAttributes {
    @Column()
    nome: string;

    @OneToMany(type => ProdutoEstoque, produtoEstoque => ProdutoEstoque)
    produtoEstoque: ProdutoEstoque
}

