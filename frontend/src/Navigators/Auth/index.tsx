import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthRoutes } from '@/Screens/SCREENS'
import { InitialScreen, LoginScreen, SignupScreen } from '@/Screens'
import Practice from '@/Screens/Practice'

const { Navigator, Screen, Group } = createNativeStackNavigator()

export default function () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen component={InitialScreen} name={AuthRoutes.INITIAL_SCREEN} />
      <Screen component={LoginScreen} name={AuthRoutes.LOGIN_SCREEN} />
      <Screen component={SignupScreen} name={AuthRoutes.SIGNUP_SCREEN} />
    </Navigator>
  )
}
