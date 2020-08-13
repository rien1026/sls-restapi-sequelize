import { AppError } from '../../utils';
import { User } from './User';

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

export const UserService = { getUserByPk, getRawUserList };
