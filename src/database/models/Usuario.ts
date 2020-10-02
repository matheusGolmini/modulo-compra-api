import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, OneToMany } from "typeorm";
import Estoque from "./Estoque"

@Entity('usuario')
export default class Usuario extends DefaultAttributes {
    @Column()
    nome: string;

    @OneToMany(type => Estoque, estoque => Estoque)
    estoque: Estoque
}

