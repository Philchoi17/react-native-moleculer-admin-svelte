'use strict'

const DbMixin = require('../mixins/db.mixin')
const { MoleculerClientError } = require('moleculer').Errors
const feedSchema = require('./models/feed.model')
const jwt = require('jsonwebtoken')

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: 'feed',
	/**
	 * mixins
	 */
	mixins: [DbMixin('feed')],

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
		getFeed: {
			rest: 'GET /get-feed',
			params: {
				filterOption: { type: 'string', optional: true },
			},
			async handler(ctx) {
				try {
					const { filterOption = 'recent' } = ctx.params
					const recent = await this.getRecent()
					return recent
				} catch (error) {
					this.logger.error('getFeed', error)
					throw new MoleculerClientError(error.message, 500, 'FEED_GET_ERROR')
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
		getRecent() {
			return [
				{
					_id: 1,
					title: 'test',
					description: 'test',
					image: 'test',
					link: 'test',
					date: 'test',
				},
				{
					_id: 2,
					title: 'test',
					description: 'test',
					image: 'test',
					link: 'test',
					date: 'test',
				},
				{
					_id: 3,
					title: 'test',
					description: 'test',
					image: 'test',
					link: 'test',
					date: 'test',
				},
				{
					_id: 4,
					title: 'test',
					description: 'test',
					image: 'test',
					link: 'test',
					date: 'test',
				},
			]
			// return this.find({
			//   query: {
			//     $sort: {
			//       createdAt: new Date()
			//     },
			//   }
			// })
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
