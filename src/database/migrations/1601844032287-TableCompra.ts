import {MigrationInterface, QueryRunner} from "typeorm";

export class TableCompra1601844032287 implements MigrationInterface {
    name = 'TableCompra1601844032287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "compra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "nome" character varying NOT NULL, "data_compra" TIMESTAMP NOT NULL DEFAULT now(), "produto_id" uuid, CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD "compra_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_8d8894ecb79bbe73c72257b8b45" FOREIGN KEY ("compra_id") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_f7d1659612e643abef52f6a732c" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_f7d1659612e643abef52f6a732c"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_8d8894ecb79bbe73c72257b8b45"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP COLUMN "compra_id"`);
        await queryRunner.query(`DROP TABLE "compra"`);
    }

}
