/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'bubble.db.elephantsql.com',
        port: 5432,
        password: 'BcFmaX68oFxvLoXOaVs0XMNFf4fN5HQ4',
        username: 'doewdrlq',
        database: 'doewdrlq',
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
