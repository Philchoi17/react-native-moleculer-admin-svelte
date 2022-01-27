import * as React from 'react'
import { Div } from 'react-native-magnus'

import { useAppSelector, useAppDispatch } from '@/Hooks'
import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button } from '@/Components'
import Logger from '@/Utils/Logger'
import { loginUser } from '@/Store/Global'

export default function () {
  const state = useAppSelector((state) => state)
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
      <Div flex={1} alignItems="center" justifyContent="center">
        <Text>LOGIN</Text>
        <Button block onPress={login}></Button>
      </Div>
    </AuthContainer>
  )
}
