import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoverTabelaFornecedor1601938337475 implements MigrationInterface {
    name = 'RemoverTabelaFornecedor1601938337475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" DROP CONSTRAINT "FK_6957f2a04fe987f42f71f66c389"`);
        await queryRunner.query(`ALTER TABLE "cotacao" ALTER COLUMN "fornecedor_id" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cotacao" ALTER COLUMN "fornecedor_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cotacao" ADD CONSTRAINT "FK_6957f2a04fe987f42f71f66c389" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
