import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAppSelector } from '@/Hooks'

import AuthStack from './Auth'
import MainTabs from './Main'

export default function () {
  const { user } = useAppSelector(({ GLOBAL }) => GLOBAL)
  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
