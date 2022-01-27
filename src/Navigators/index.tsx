import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import AuthStack from './Auth'
import MainTabs from './Main'

export default function () {
  const user = useSelector((state: any) => state.Global.user)
  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
