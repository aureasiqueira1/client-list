/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'kesavan.db.elephantsql.com',
        port: 5432,
        password: '8KW_ExB2sc2DlBcE2kmVSn9RJRWSNEGN',
        username: 'hdrnorpb',
        database: 'hdrnorpb',
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
