"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const dataSource = new typeorm_1.DataSource({
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
        }),
    },
];
//# sourceMappingURL=database.providers.js.map