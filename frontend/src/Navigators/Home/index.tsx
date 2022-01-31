import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerRef } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

import { HomeScreen, ProfileScreen } from '@/Screens'
import { HomeRoutes } from '@/Screens/SCREENS'
import { DrawerController, Text, Drawer } from '@/Components'
import { HomeScreenProps } from '../NavStackParams'

const { Navigator, Group, Screen } = createNativeStackNavigator()

export default function () {
  const navigation = useNavigation<HomeScreenProps>()
  const drawerRef = React.createRef<DrawerRef>()
  const navigateToProfile = () => {
    navigation.navigate(HomeRoutes.PROFILE_SCREEN)
  }
  return (
    <>
      <Drawer drawerRef={drawerRef} drawerItems={[]} />
      <Navigator screenOptions={{ headerShown: false }}>
        <Group>
          <Screen component={HomeScreen} name={HomeRoutes.HOME_SCREEN} />
        </Group>
        <Group screenOptions={{ presentation: 'fullScreenModal' }}>
          <Screen component={ProfileScreen} name={HomeRoutes.PROFILE_SCREEN} />
        </Group>
      </Navigator>
      <DrawerController
        drawerRef={drawerRef}
        navigateToProfile={navigateToProfile}
      />
    </>
  )
}
