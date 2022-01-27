'use strict'

const DbMixin = require('../mixins/db.mixin')
const { MoleculerClientError } = require('moleculer').Errors
const userSchema = require('./models/users.model')
const jwt = require('jsonwebtoken')

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: 'users',
	/**
	 * mixins
	 */
	mixins: [DbMixin('users')],

	/**
	 * Settings
	 */
	settings: {
		idField: '_id',
		fields: userSchema,
	},
	/**
	 * Model
	 */
	// model: UserModel,

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		 * @param {Object} - {
		 *
		 * }
		 */
		createUser: {
			rest: 'POST /create-user',
			params: {
				user: { type: 'object', required: true },
			},
			async handler(ctx) {
				try {
					const { user } = ctx.params
					const exists = await this.checkIfExists(user.email)
					if (exists) 'email already exists ...'
					const format = await this.userFormat(user)
					if (!format) throw 'something went wrong ...'
					const insert = await this.insertUser(format)
					if (!insert) throw 'something went wrong ...'
					return insert
				} catch (error) {
					this.logger.error('createUser: error =', error)

					throw new MoleculerClientError(error)
				}
			},
		},
		loginUser: {
			rest: 'POST /login-user',
			params: {
				email: { type: 'string', required: true },
				password: { type: 'string', required: true },
			},
			async handler(ctx) {
				try {
					const { email, password } = ctx.params
					const user = await this.findUser(email, password)
					if (!user) throw 'wrong credentials ...'
					return user
				} catch (error) {
					this.logger.error('loginUser: error =', error)
					throw new MoleculerClientError(error)
				}
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {
		async userFormat(userPayload) {
			try {
				const { email, password, name, age, gender } = userPayload
				const now = new Date()
				return {
					email,
					password,
					name,
					age,
					gender,
					createdAt: now,
					updatedAt: now,
				}
			} catch (error) {
				this.logger.error('userFormat: error =', error)
				return false
			}
		},
		async insertUser(userToInsert) {
			try {
				const insert = await this.adapter.insert(userToInsert)
				return insert
			} catch (error) {
				this.logger.error('insertUser: error =', error)
				return false
			}
		},
		async checkIfExists(email) {
			try {
				const exists = await this.adapter.findOne({ email })
				this.logger.info('exists =', exists)
				return exists
			} catch (error) {
				this.logger.error('checkIfExists: error =', error)
				return false
			}
		},
		async findUser(email, password) {
			try {
				const userToFind = await this.adapter.findOne({ email, password })
				return userToFind
			} catch (error) {
				this.logger.error('findUser: error =', error)
				return false
			}
		},
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
}
