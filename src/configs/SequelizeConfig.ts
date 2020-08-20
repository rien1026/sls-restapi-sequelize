import { Sequelize } from 'sequelize-typescript';
import { Constants } from '../utils';
import { User } from '../components/User';

const sequelize = new Sequelize({
	host: Constants.DB_CONFIG.MYSQL_HOST,
	database: Constants.DB_CONFIG.MYSQL_DB,
	port: Constants.DB_CONFIG.MYSQL_PORT,
	dialect: 'mysql',
	username: Constants.DB_CONFIG.MYSQL_USER,
	password: Constants.DB_CONFIG.MYSQL_PASSWD,
	storage: ':memory:',
	hooks: {
		beforeBulkCreate: (option: any) => {
			option.individualHooks = true;
		},
		beforeBulkUpdate: (option: any) => {
			option.individualHooks = true;
		},
		beforeBulkDestroy: (option: any) => {
			option.individualHooks = true;
		},
		beforeCreate: (instance: any) => {},
		beforeUpdate: (instance: any) => {},
		beforeDestroy: async (instance: any) => {},
	},
	models: [User],
});

export const configSequelize = async () => {
	console.log({
		i: '[MYSQL] is configured.',
		host: Constants.DB_CONFIG.MYSQL_HOST,
		port: Constants.DB_CONFIG.MYSQL_PORT,
	});
	if (Constants.PROD_MODE === 'prod') {
		return;
	}

	sequelize.sync();
};
