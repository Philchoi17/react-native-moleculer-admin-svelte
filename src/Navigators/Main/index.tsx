import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from '@/Screens'
import { Icon } from '@/Components'

const { Navigator, Screen } = createBottomTabNavigator()

const tabOptions = (
  tabBarIcon: ({ focused }: { focused: boolean }) => JSX.Element,
) => ({
  lazy: true,
  tabBarIcon,
})

export default function () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Screen
        component={HomeScreen}
        name={'home'}
        options={tabOptions(({ focused }) => (
          <Icon name={focused ? 'home' : 'home-outline'} size="6xl" />
        ))}
      />
    </Navigator>
  )
}
