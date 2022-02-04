import * as React from 'react'
import { Platform, StatusBar, AppState, AppStateStatus } from 'react-native'
import { ThemeProvider } from 'react-native-magnus'
import { useAppState } from '@react-native-community/hooks'
import { checkAndRequest } from './Utils/Permissions'

import Config from '@/Config'
import Theme from '@/Theme'
import Provider from '@/Store'
import Navigator from '@/Navigators'
import Logger from '@/Utils/Logger'

const { useEffect } = React
export default function () {
  const state = useAppState()

  const mainUseEffectHandler = () => {
    try {
      Logger.debug('mainUseEffectHandler', state)
      const appPermissionListener = async (status: AppStateStatus) => {
        Logger.debug('appPermissionListener: status =', status)
      }
      Logger.debug('appPermissionListener =', appPermissionListener)
    } catch (error) {
      Logger.error('mainUseEffectHandler: error =', error)
    }
    return () => {
      // cleanup
    }
  }
  useEffect(mainUseEffectHandler, [state])
  return (
    <Provider>
      <ThemeProvider theme={Theme.default}>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </ThemeProvider>
    </Provider>
  )
}
