import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteCotacao1601853718087 implements MigrationInterface {
    name = 'AjusteCotacao1601853718087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" RENAME COLUMN "produto" TO "produto_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" RENAME COLUMN "produto_id" TO "produto"`);
    }

}
