import axios from 'axios'

import Config from '@/Config'
import Logger from '@/Utils/Logger'

const BASE_EP = Config.getBaseURL()

let BASE_HEADERS = {
  'Content-Type': 'application/json',
}

export const USERS_EP = axios.create({
  baseURL: `${BASE_EP}/users`,
  headers: BASE_HEADERS,
})
