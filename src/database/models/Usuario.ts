import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity } from "typeorm";

@Entity('usuario')
export default class Usuario extends DefaultAttributes {
    @Column()
    nome: string;

    @Column({ type: "uuid", name: "estoque_id" })
    estoque: string
}

