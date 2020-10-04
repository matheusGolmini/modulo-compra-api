import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import Cotacao from './Cotacao'


@Entity('compra')
export default class Compra extends DefaultAttributes {
    @Column()
    nome: string

    @PrimaryGeneratedColumn('uuid')
    id: number

    @CreateDateColumn({ name: 'data_compra' })
    data_compra: Date

    @Column({ type: "uuid" })
    produto: string

    @ManyToOne(type => Cotacao, comprador => Cotacao)
    @JoinColumn({ name: 'cotacao_id' })
    cotacao: Cotacao
}

