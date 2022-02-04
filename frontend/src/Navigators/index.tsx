import * as React from 'react'
import { Drawer, Host, DrawerRef } from 'react-native-magnus'
import { NavigationContainer } from '@react-navigation/native'
import { useAppState } from '@react-native-community/hooks'

import { useAppDispatch, useAppSelector } from '@/Hooks'
import AuthStack from './Auth'
import MainTabs from './Main'
import { Text, DrawerController, Loading } from '@/Components'
import { setUser } from '@/Store/Global'
import Config from '@/Config'
import Logger from '@/Utils/Logger'

const { useState, useEffect } = React
export default function () {
  const state = useAppState()
  const dispatch = useAppDispatch()

  const [initializing, setInitializing] = useState<boolean>(false)

  const checkIfUser = async () => {
    const user = await Config.getUser()
    if (user) return dispatch(setUser(user))
    return
  }

  const mainNavigatorUseEffectHandler = () => {
    try {
      setInitializing(true)
      checkIfUser()
    } catch (error) {
      Logger.error('mainNavigatorUseEffectHandler: error =', error)
      return
    } finally {
      // TODO: temp until better solution is found
      setTimeout(() => setInitializing(false), 100)
    }
    return () => {
      // cleanup
    }
  }

  useEffect(mainNavigatorUseEffectHandler, [state])

  const { user } = useAppSelector(({ GLOBAL }) => GLOBAL)
  // const drawerRef = React.createRef<DrawerRef>()
  if (initializing) {
    return <Loading />
  }
  return (
    <Host>
      <NavigationContainer>
        {user ? <MainTabs /> : <AuthStack />}
      </NavigationContainer>
    </Host>
  )
}
