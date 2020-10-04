import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteDocumento1601851410775 implements MigrationInterface {
    name = 'AjusteDocumento1601851410775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "numero"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documento" ADD "numero" integer NOT NULL`);
    }

}
