'use strict'
const SocketIOService = require('moleculer-io')

const DbMixin = require('../mixins/db.mixin')
const { MoleculerClientError } = require('moleculer').Errors
// const userSchema = require('./models/users.model')
const jwt = require('jsonwebtoken')

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: 'chat',
	mixins: [SocketIOService],
	settings: {
		io: {
			namespaces: {
				'/': {
					events: {
						call: {
							aliases: {
								add: 'math.add',
							},
							whitelist: ['math.add'],
							callOptions: {},
						},
					},
				},
			},
		},
	},
}
