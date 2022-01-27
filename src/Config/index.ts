import Logger from '@/Utils/Logger'
import Storage from '@/Utils/Storage'
import { storageItems } from '@/Utils/Storage/storageItems'

class Config {
  constructor() {}

  init() {}

  async setUser(user: any) {
    Logger.debug('user =', user)
    return await Storage.set(storageItems.user, user)
  }

  async getUser() {
    try {
      const user = await Storage.get(storageItems.user)
      return user
    } catch (error) {
      Logger.err('Config: getUser: error =', error)
      return false
    }
  }
}

export default new Config()
