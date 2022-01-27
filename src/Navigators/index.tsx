import * as React from 'react'
import { Drawer, Host, DrawerRef } from 'react-native-magnus'
import { NavigationContainer } from '@react-navigation/native'
import { useAppSelector } from '@/Hooks'

import AuthStack from './Auth'
import MainTabs from './Main'
import { Text, DrawerController } from '@/Components'

export default function () {
  const { user } = useAppSelector(({ GLOBAL }) => GLOBAL)
  const drawerRef = React.createRef<DrawerRef>()
  return (
    <Host>
      <Drawer ref={drawerRef}>
        <Text>Hello World</Text>
      </Drawer>
      <NavigationContainer>
        {user ? <MainTabs /> : <AuthStack />}
      </NavigationContainer>
      {user && <DrawerController drawerRef={drawerRef} />}
    </Host>
  )
}
