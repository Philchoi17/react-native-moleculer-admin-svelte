import Logger from '@/Utils/Logger'
import Config from '@/Config'
import { USERS_EP } from '../ENDPOINTS'
import { userType, userPayloadType } from '@/Types'

class Auth {
  /**
   *
   * @param email user email
   * @param password user password
   * @returns userObject -> userType
   */
  async loginAttempt(
    email: string,
    password: string,
  ): Promise<false | userType> {
    try {
      const user = await USERS_EP.post('/login-user', {
        email,
        password,
      })
      const { data } = user
      return data
    } catch (error) {
      Logger.error('loginAttempt: error =', error)
      return false
    }
  }
  /**\
   * @definition register user
   * @param userPayload
   */
  async signupAttempt(userPayload: userPayloadType): Promise<boolean> {
    try {
      await USERS_EP.post('/create-user', { user: userPayload })
      return true
    } catch (error) {
      Logger.error('signupAttempt: error =', error)
      return false
    }
  }
}

export default new Auth()
