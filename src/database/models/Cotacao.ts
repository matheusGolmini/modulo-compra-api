import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import Usuario from './Usuario'
import Fornecedor from './Fornecedor'
import Produto from './Produto'
import Documento from './Documento'


@Entity('cotacao')
export default class ProdutoEstoque extends DefaultAttributes {
    @Column()
    precoFim: number

    @Column()
    precoUn: number

    @Column({ type: 'date' })
    prazoEntrega: Date

    @Column({ type: 'date' })
    prazoPagamento: Date

    @ManyToOne(type => Usuario, comprador => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario_id: Usuario

    @ManyToOne(type => Fornecedor, fornecedor => Fornecedor)
    @JoinColumn({ name: 'fornecedor_id' })
    fornecedor: Fornecedor

    @ManyToOne(type => Produto, fornecedor => Produto)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto

    @OneToOne(type => Documento, fornecedor => Documento)
    documento: Documento
}

