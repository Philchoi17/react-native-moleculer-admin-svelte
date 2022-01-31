import axios from 'axios'

import Config from '@/Config'
import Logger from '@/Utils/Logger'

const BASE_EP = Config.getBaseURL()

/**
 * @description - base header for endpoints. protected will need Bearer Token
 */
let BASE_HEADERS = {
  'Content-Type': 'application/json',
}

/**
 * @description -  users endpoint
 */
export const USERS_EP = axios.create({
  baseURL: `${BASE_EP}/users`,
  headers: BASE_HEADERS,
})
