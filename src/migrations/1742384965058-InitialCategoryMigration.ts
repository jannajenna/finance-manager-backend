import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialCategoryMigration1688900000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE category (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL, 
        description TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE category;`);
  }
}
