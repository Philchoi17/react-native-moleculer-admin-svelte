import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthStack from './Auth'

export default function () {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
