import { Column, Model, CreatedAt, UpdatedAt, DeletedAt, Table, DataType } from 'sequelize-typescript';
import Joi from '@hapi/joi';
import bcrypt from 'bcrypt';

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
 *   schemas:
 *     PostUserSchema:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: email
 *         passwd:
 *           type: string
 *           example: passwd
 *       required:
 *         - email
 *         - passwd
 *
 *   parameters:
 *     PostUserParams:
 *       name: PostUserParams
 *       in: body
 *       description: params for insert user.
 *       required: true
 *       schema:
 *         $ref: '#components/schemas/PostUserSchema'
 */

export const PostUserParams = Joi.object({
	email: Joi.string().email().max(100).required(),
	passwd: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     PutUserSchema:
 *       type: object
 *       properties:
 *         passwd:
 *           type: string
 *           example: passwd
 *
 *   parameters:
 *     PutUserParams:
 *       name: PutUserParams
 *       in: body
 *       description: params for update user.
 *       required: true
 *       schema:
 *         $ref: '#components/schemas/PutUserSchema'
 */

export const PutUserParams = Joi.object({
	passwd: Joi.string(),
});

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
