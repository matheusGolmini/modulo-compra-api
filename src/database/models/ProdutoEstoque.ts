import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Produto from "./Produto";
import Estoque from "./Estoque"


@Entity('produto_estoque')
export default class ProdutoEstoque extends DefaultAttributes {
    @Column()
    quantidade: number

    @ManyToOne(type => Produto, produto => Produto)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto[]

    @ManyToOne(type => Estoque, deposito => Estoque)
    @JoinColumn({ name: 'estoque_id' })
    estoque: Estoque[]

}

