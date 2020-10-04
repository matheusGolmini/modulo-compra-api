import {MigrationInterface, QueryRunner} from "typeorm";

export class Tables1601853153758 implements MigrationInterface {
    name = 'Tables1601853153758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, "stoque" uuid NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fornecedor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, CONSTRAINT "PK_5bff2d88b4e0ef84a6444b786a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documento" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "tipo" character varying NOT NULL, "compra_id" uuid, CONSTRAINT "REL_4652301b1361855d9f9db4cb60" UNIQUE ("compra_id"), CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cotacao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "precoFim" integer NOT NULL, "precoUn" integer NOT NULL, "produto" uuid NOT NULL, "prazoEntrega" date NOT NULL, "prazoPagamento" date NOT NULL, "usuario_id" uuid, "fornecedor_id" uuid, CONSTRAINT "PK_7f07370074295e6ac356af160df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "compra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, "data_compra" TIMESTAMP NOT NULL DEFAULT now(), "produto" uuid NOT NULL, "cotacao_id" uuid, CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_4652301b1361855d9f9db4cb605" FOREIGN KEY ("compra_id") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_1192efdbd97396c1bba95eb6ec2" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_6957f2a04fe987f42f71f66c389" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_64a3a80e26a0eff35e50e6fb9df" FOREIGN KEY ("cotacao_id") REFERENCES "cotacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_64a3a80e26a0eff35e50e6fb9df"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_6957f2a04fe987f42f71f66c389"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_1192efdbd97396c1bba95eb6ec2"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_4652301b1361855d9f9db4cb605"`);
        await queryRunner.query(`DROP TABLE "compra"`);
        await queryRunner.query(`DROP TABLE "cotacao"`);
        await queryRunner.query(`DROP TABLE "documento"`);
        await queryRunner.query(`DROP TABLE "fornecedor"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
