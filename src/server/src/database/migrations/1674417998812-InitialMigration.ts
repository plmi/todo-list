import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1674417998812 implements MigrationInterface {
    name = 'InitialMigration1674417998812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "TodoItem" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "done" boolean NOT NULL, CONSTRAINT "PK_1e40bb2d71041ada8ad86331161" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "TodoItem"`);
    }

}
