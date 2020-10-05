import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import Usuario from './Usuario'
import Documento from './Documento'
import Compra from "./Compra";


@Entity('cotacao')
export default class Cotacao extends DefaultAttributes {
    @Column()
    precoFim: number

    @Column()
    precoUn: number

    @Column({ type: "uuid", name: "produto_id"})
    produto: string

    @Column({ type: 'date' })
    prazoEntrega: Date

    @Column({ type: 'date' })
    prazoPagamento: Date

    @ManyToOne(type => Usuario, comprador => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario

    @Column({type: 'uuid', name: 'fornecedor_id'})
    fornecedor: string

    @OneToMany(type => Compra, comprador => Compra)
    compra: Compra

    @OneToOne(type => Documento, fornecedor => Documento)
    documento: Documento
}

