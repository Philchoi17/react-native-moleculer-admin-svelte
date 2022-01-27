import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/core'

import { AuthScreenProps } from '@/Navigators/NavStackParams'
import { AuthRoutes } from '../SCREENS'
import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button } from '@/Components'
import Logger from '@/Utils/Logger'

// test
// import { useGetPokemonByNameQuery } from '@/Services/pokemon'

export default function () {
  // const getPokemon = useGetPokemonByNameQuery
  // Logger.debug('getPokemon =', getPokemon)
  const navigation = useNavigation<AuthScreenProps>()
  const goLogin = () => {
    navigation.navigate(AuthRoutes.LOGIN_SCREEN)
  }
  const goSignup = () => {
    navigation.navigate(AuthRoutes.SIGNUP_SCREEN)
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
