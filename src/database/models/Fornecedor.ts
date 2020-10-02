import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity } from "typeorm";


@Entity('fornecedor')
export default class Fornecedor extends DefaultAttributes {
    @Column()
    nome: string;
}

