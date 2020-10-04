import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteCotacao1601848508770 implements MigrationInterface {
    name = 'AjusteCotacao1601848508770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" ADD "quantidade" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" DROP COLUMN "quantidade"`);
    }

}
