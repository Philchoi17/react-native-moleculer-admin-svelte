import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { InitialScreen, LoginScreen, SignupScreen } from '@/Screens'

const { Navigator, Screen } = createNativeStackNavigator()

export default function () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen component={InitialScreen} name={'initial'} />
      <Screen component={LoginScreen} name={'login'} />
      <Screen component={SignupScreen} name={'signup'} />
    </Navigator>
  )
}
