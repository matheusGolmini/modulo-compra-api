import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, OneToMany, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import Cotacao from './Cotacao'
import Produto from './Produto'


@Entity('compra')
export default class Compra extends DefaultAttributes {
    @Column()
    nome: string

    @PrimaryGeneratedColumn('uuid')
    id: number

    @CreateDateColumn({ name: 'data_compra' })
    data_compra: Date

    @ManyToOne(type => Produto, fornecedor => Produto)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto

    @ManyToOne(type => Cotacao, comprador => Cotacao)
    @JoinColumn({ name: 'cotacao_id' })
    cotacao: Cotacao
}

