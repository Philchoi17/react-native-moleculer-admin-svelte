import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  ChatRoomsScreen,
  ChatRoomScreen,
  ChatSearchScreen,
  ChatRequestSreen,
} from '@/Screens/Chat'

import { ChatRoutes } from '@/Screens/SCREENS'

const { Navigator, Group, Screen } = createNativeStackNavigator()

export default function () {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen
          component={ChatRoomsScreen}
          name={ChatRoutes.CHAT_ROOMS_SCREEN}
        />
        <Screen component={ChatRoomScreen} name={ChatRoutes.CHAT_ROOM_SCREEN} />
        <Screen
          component={ChatSearchScreen}
          name={ChatRoutes.CHAT_SEARCH_SCREEN}
        />
        <Screen
          component={ChatRequestSreen}
          name={ChatRoutes.CHAT_REQUEST_SCREEN}
        />
      </Group>
    </Navigator>
  )
}
