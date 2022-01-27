import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

import { useAppSelector, useAppDispatch } from '@/Hooks'
import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button, KeyboardAvoider, Icon } from '@/Components'
import { Form, Input, Submit } from '@/Components/Forms/'
import Logger from '@/Utils/Logger'
import { loginUser } from '@/Store/Global'
import { validationSchema } from './validation'

const { useState, useEffect } = React
export default function () {
  // const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const login = () => {
    dispatch(
      loginUser({
        email: 'guest@gmail.com',
      }),
    )
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
