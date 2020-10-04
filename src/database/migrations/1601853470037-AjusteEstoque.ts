import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteEstoque1601853470037 implements MigrationInterface {
    name = 'AjusteEstoque1601853470037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" RENAME COLUMN "stoque" TO "estoque_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" RENAME COLUMN "estoque_id" TO "stoque"`);
    }

}
