import DefaultAttributes from "./DefaultAttributes";
import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import ProdutoEstoque from "./ProdutoEstoque";
import Usuario from "./Usuario";


@Entity('estoque')
export default class Estoque extends DefaultAttributes {
    @Column()
    nome: string;

    @OneToMany(type => ProdutoEstoque, produtoEstoque => ProdutoEstoque)
    produtoEstoque: ProdutoEstoque

    @ManyToOne(type => Usuario, usuario => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario
}

