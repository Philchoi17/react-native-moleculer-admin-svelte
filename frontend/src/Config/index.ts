import { userType } from '@/Types'
import Logger from '@/Utils/Logger'
import Storage from '@/Utils/Storage'
import { storageItems } from '@/Utils/Storage/storageItems'
import appConfig from './appConfig.json'

class Config {
  BASE_URL: string
  LANGUAGE: string

  constructor() {
    const { BASE_URL, LANGUAGE } = appConfig
    this.BASE_URL = BASE_URL
    this.LANGUAGE = LANGUAGE
  }

  init() {}

  /**
   *
   * @returns removes all keys in async storage
   */
  async reset(): Promise<boolean> {
    try {
      return await Storage.removeAll()
    } catch (error) {
      Logger.err('Config: reset: error =', error)
      return false
    }
  }

  /**
   *
   * @param user
   * @returns
   */
  async setUser(user: userType): Promise<boolean> {
    Logger.debug('user =', user)
    return await Storage.set(storageItems.user, user)
  }

  /**
   *
   * @returns
   */
  async getUser(): Promise<userType | boolean> {
    try {
      const user = await Storage.get(storageItems.user)
      if (!user) throw 'no user'
      return JSON.parse(user)
    } catch (error) {
      Logger.info('Config: getUser: error =', error)
      return false
    }
  }

  getBaseURL() {
    return this.BASE_URL
  }
}

export default new Config()
