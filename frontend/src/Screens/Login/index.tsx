import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

import { useAppSelector, useAppDispatch } from '@/Hooks'
import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button, KeyboardAvoider, Icon, Alert } from '@/Components'
import { Form, Input, Submit } from '@/Components/Forms/'
import Logger from '@/Utils/Logger'
import { setUser } from '@/Store/Global'
import { validationSchema } from './validation'
import Config from '@/Config'
import AuthService from '@/Services/Auth'
// import { useLazyLoginQuery } from '@/Services/api'

const { useState, useEffect } = React
export default function () {
  // const state = useAppSelector((state) => state)
  const [loggingIn, setLoggingIn] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [])

  // const loginAttempt = useLazyLoginQuery()
  const login = async (loginCreds: { email: string; password: string }) => {
    try {
      const { email, password } = loginCreds
      const attempt = await AuthService.loginAttempt(email, password)
      Logger.debug('attempt:', attempt)
      if (!attempt) throw 'something went wrong ...'
      dispatch(setUser(attempt))
      Config.setUser(attempt)
    } catch (error) {
      Logger.error('login: error =', error)
      return false
    }
  }

  return (
    <AuthContainer headerProps={{ heading: 'Login' }}>
      <Div p="sm" justifyContent="center" flex={1}>
        <KeyboardAvoider>
          <Form
            validationSchema={validationSchema}
            onSubmit={login}
            initialValues={{
              email: '',
              password: '',
            }}>
            <Input
              // loading={signingIn}
              suffix={<Icon name="email-outline" size="4xl" />}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              val="email"
              label="Email"
            />
            <Input
              // loading={signingIn}
              suffix={<Icon name="lock-outline" size="4xl" />}
              autoCapitalize="none"
              autoCorrect={false}
              label="Password"
              textContentType="password"
              val="password"
              secureTextEntry
            />
            <Div row>
              <Submit title={'Login'} />
              <Button ml="md" onPress={() => Logger.debug('pressed')}>
                Signup
              </Button>
            </Div>
          </Form>
        </KeyboardAvoider>
      </Div>
    </AuthContainer>
  )
}
