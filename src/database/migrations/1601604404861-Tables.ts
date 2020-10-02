import {MigrationInterface, QueryRunner} from "typeorm";

export class Tables1601604404861 implements MigrationInterface {
    name = 'Tables1601604404861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, CONSTRAINT "PK_99c4351f9168c50c0736e6a66be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produto_estoque" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "quantidade" integer NOT NULL, "produto_id" uuid, "estoque_id" uuid, CONSTRAINT "PK_1e9eed82e58b51480b358bcafab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estoque" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, "usuario_id" uuid, CONSTRAINT "PK_261e2d9d708b7e0ca5dd8340bc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fornecedor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, CONSTRAINT "PK_5bff2d88b4e0ef84a6444b786a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documento" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "numero" integer NOT NULL, "tipo" character varying NOT NULL, "cotacao_id" uuid, CONSTRAINT "REL_e0300bdea6ed5f4dbfba7209d8" UNIQUE ("cotacao_id"), CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cotacao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "precoFim" integer NOT NULL, "precoUn" integer NOT NULL, "prazoEntrega" date NOT NULL, "prazoPagamento" date NOT NULL, "usuario_id" uuid, "fornecedor_id" uuid, "produto_id" uuid, CONSTRAINT "PK_7f07370074295e6ac356af160df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" ADD CONSTRAINT "FK_2d6c2db533915914efc4255013d" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" ADD CONSTRAINT "FK_fe15a59c05dd785942fece52ef5" FOREIGN KEY ("estoque_id") REFERENCES "estoque"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estoque" ADD CONSTRAINT "FK_b0a4a98f6f85fb079834def86d0" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_e0300bdea6ed5f4dbfba7209d80" FOREIGN KEY ("cotacao_id") REFERENCES "cotacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_1192efdbd97396c1bba95eb6ec2" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_6957f2a04fe987f42f71f66c389" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_3e97d7c28bb1a97e1c3acb90ec7" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_3e97d7c28bb1a97e1c3acb90ec7"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_6957f2a04fe987f42f71f66c389"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_1192efdbd97396c1bba95eb6ec2"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_e0300bdea6ed5f4dbfba7209d80"`);
        await queryRunner.query(`ALTER TABLE "estoque" DROP CONSTRAINT "FK_b0a4a98f6f85fb079834def86d0"`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" DROP CONSTRAINT "FK_fe15a59c05dd785942fece52ef5"`);
        await queryRunner.query(`ALTER TABLE "produto_estoque" DROP CONSTRAINT "FK_2d6c2db533915914efc4255013d"`);
        await queryRunner.query(`DROP TABLE "cotacao"`);
        await queryRunner.query(`DROP TABLE "documento"`);
        await queryRunner.query(`DROP TABLE "fornecedor"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "estoque"`);
        await queryRunner.query(`DROP TABLE "produto_estoque"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
