import { AppError } from '../../utils';
import { User } from './User';
import bcrypt from 'bcrypt';

const getRawUserList = async ({
	limit = 5,
	offset = 0,
	attributes = ['*'],
}: {
	attributes?: string[];
	limit?: number;
	offset?: number;
}) => {
	try {
		return await User.findAll({ nest: true, raw: true, attributes: attributes, limit: limit, offset: offset });
	} catch (err) {
		new AppError('SgetRawUserList', err.message, err.stack);
		return [];
	}
};

const getUserByPk = async (no: number, { attributes = ['*'] }: { attributes: string[] }) => {
	try {
		return await User.findByPk(no, { attributes: attributes });
	} catch (err) {
		new AppError('SgetUser', err.message, err.stack);
		return undefined;
	}
};

const insertUser = async (params: { email: string, passwd: string, salt?: string }) => {
	try {

		params.salt = await bcrypt.genSalt(10);
		params.passwd = await bcrypt.hash(params.passwd, params.salt);

		return await new User(params).save();
	} catch (err) {
		throw new AppError('SinsertUser', err.message, err.stack);
	}
}

export const UserService = { getUserByPk, getRawUserList, insertUser };
