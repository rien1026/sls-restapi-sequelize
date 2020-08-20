import * as dotenv from 'dotenv';

const PROD_MODE = (process.env['PROD_MODE'] as any) || 'local';

switch (PROD_MODE) {
	case 'local':
		dotenv.config({ path: './.env.local' });
		break;
}

const API_INFO = {
	URI: process.env['API_INFO_URI'],
	VERSION: process.env['API_INFO_VERSION'],
};

const DB_CONFIG = {
	MYSQL_HOST: process.env['DB_CONFIG_MYSQL_HOST'],
	MYSQL_DB: process.env['DB_CONFIG_MYSQL_DB'],
	MYSQL_PORT: Number(process.env['DB_CONFIG_MYSQL_PORT']),
	MYSQL_USER: process.env['DB_CONFIG_MYSQL_USER'],
	MYSQL_PASSWD: process.env['DB_CONFIG_MYSQL_PASSWD'],
};

export const Constants = { PROD_MODE, API_INFO, DB_CONFIG };
