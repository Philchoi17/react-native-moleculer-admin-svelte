import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/core'

import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button } from '@/Components'

export default function () {
  const navigation: any = useNavigation()
  const goLogin = () => {
    navigation.navigate('login')
  }
  const goSignup = () => {
    navigation.navigate('signup')
  }
  return (
    <AuthContainer>
      <Div flex={1} alignItems="center" justifyContent="center" p="sm">
        <Text size="xl">Initial Screen</Text>
        <Button block onPress={goLogin}>
          Login
        </Button>
        <Div p="sm" />
        <Button block onPress={goSignup}>
          Signup
        </Button>
      </Div>
    </AuthContainer>
  )
}
