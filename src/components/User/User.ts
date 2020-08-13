import { Column, Model, CreatedAt, UpdatedAt, DeletedAt, Table, DataType } from 'sequelize-typescript';
import Joi from '@hapi/joi';

@Table({ tableName: 'User' })
export class User extends Model<User> {
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	public no: number;

	@Column({ type: DataType.STRING(50), unique: true })
	public email: string;

	@Column({ type: DataType.STRING, allowNull: false })
	public passwd: string;

	@Column({ type: DataType.STRING, allowNull: false })
	public salt: string;

	@CreatedAt
	public inDt: Date;

	@UpdatedAt
	public upDt: Date;

	@DeletedAt
	public delDt: Date;
}

/**
 * @swagger
 * components:
 *   parameters:
 *     UserNoPathParam:
 *       name: UserNo
 *       in: path
 *       required: true
 *
 */
export const UserNoPathParam = Joi.object({
	userNo: Joi.number().integer().min(1).required(),
});
