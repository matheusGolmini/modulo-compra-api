import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteDocumento1601850993228 implements MigrationInterface {
    name = 'AjusteDocumento1601850993228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_e0300bdea6ed5f4dbfba7209d80"`);
        await queryRunner.query(`ALTER TABLE "documento" RENAME COLUMN "cotacao_id" TO "compra_id"`);
        await queryRunner.query(`ALTER TABLE "documento" RENAME CONSTRAINT "REL_e0300bdea6ed5f4dbfba7209d8" TO "UQ_4652301b1361855d9f9db4cb605"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_4652301b1361855d9f9db4cb605" FOREIGN KEY ("compra_id") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_4652301b1361855d9f9db4cb605"`);
        await queryRunner.query(`ALTER TABLE "documento" RENAME CONSTRAINT "UQ_4652301b1361855d9f9db4cb605" TO "REL_e0300bdea6ed5f4dbfba7209d8"`);
        await queryRunner.query(`ALTER TABLE "documento" RENAME COLUMN "compra_id" TO "cotacao_id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_e0300bdea6ed5f4dbfba7209d80" FOREIGN KEY ("cotacao_id") REFERENCES "cotacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
