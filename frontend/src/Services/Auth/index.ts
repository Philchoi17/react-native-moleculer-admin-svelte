import Logger from '@/Utils/Logger'
import Config from '@/Config'
import { USERS_EP } from '../ENDPOINTS'
import { userType } from '@/Types'

interface UserPayload {}

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
      Logger.err('loginAttempt: error =', error)
      return false
    }
  }
  async signupAttempt(userPayload: UserPayload): Promise<boolean> {
    return true
  }
}

export default new Auth()
