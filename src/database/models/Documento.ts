import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import Cotacao from "./Cotacao";


@Entity('documento')
export default class Documento extends DefaultAttributes {
    @Column()
    numero: number

    @Column()
    tipo: string
    
    @OneToOne(type => Cotacao, cotacao => Cotacao)
    @JoinColumn({ name: 'cotacao_id' })
    cotacao: Cotacao
}

