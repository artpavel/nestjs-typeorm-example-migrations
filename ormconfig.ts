import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'artpavel',
  password: 'root',
  database: 'test_orm',
  entities: ['dist/**/*.entity.js'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'history',
});
