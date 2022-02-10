'use strict'

const DbMixin = require('../mixins/db.mixin')
const { MoleculerClientError } = require('moleculer').Errors
// const userSchema = require('./models/users.model')
const jwt = require('jsonwebtoken')

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: 'quiz',
	/**
	 * mixins
	 */
	// mixins: [DbMixin('quiz')],

	/**
	 * Settings
	 */
	settings: {
		idField: '_id',
		fields: ['test'],
	},
	/**
	 * Model
	 */
	// model: UserModel,

	/**
	 * Dependencies
	 */
	dependencies: ['users'],

	/**
	 * Actions
	 */
	actions: {
		uploadQuiz: {
			rest: 'POST /upload-quiz',
			params: {
				quiz: { type: 'object', required: true },
			},
			async handler(ctx) {
				return true
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
	methods: {},

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
