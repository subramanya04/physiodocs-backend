import { config } from 'dotenv';
import { getDatabaseOptions } from './database.util';

describe('getDatabaseOptions', () => {
  beforeEach(() => {
    config();
  });

  it('should return the database options', () => {
    const result = getDatabaseOptions(__dirname);
    expect(result).toEqual({
      type: process.env.DB_TYPE as 'mysql' | 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: false,
      logging: process.env.ENV !== 'PROD'
    });
  });
});
