import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useSelector, useDispatch } from 'react-redux'

import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button } from '@/Components'
import Logger from '@/Utils/Logger'
import { initUser } from '@/Store/Global'

export default function () {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const login = () => {
    dispatch(
      initUser({
        email: 'guest@gmail.com',
      }),
    )
    // Logger.debug('user =', state)
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
