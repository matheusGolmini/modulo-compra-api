import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteRelaCompra1601845455478 implements MigrationInterface {
    name = 'AjusteRelaCompra1601845455478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_8d8894ecb79bbe73c72257b8b45"`);
        await queryRunner.query(`ALTER TABLE "cotacao" DROP COLUMN "compra_id"`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "cotacao_id" uuid`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "FK_64a3a80e26a0eff35e50e6fb9df" FOREIGN KEY ("cotacao_id") REFERENCES "cotacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "FK_64a3a80e26a0eff35e50e6fb9df"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "cotacao_id"`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD "compra_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_8d8894ecb79bbe73c72257b8b45" FOREIGN KEY ("compra_id") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
