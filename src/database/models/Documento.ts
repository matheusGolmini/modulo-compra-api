import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import Compra from "./Compra";


@Entity('documento')
export default class Documento extends DefaultAttributes {

    @Column()
    tipo: string
    
    @OneToOne(type => Compra, compra => Compra)
    @JoinColumn({ name: 'compra_id' })
    compra: Compra
}

