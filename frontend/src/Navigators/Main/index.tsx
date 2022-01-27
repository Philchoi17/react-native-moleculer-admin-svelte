import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from '../Home'
import ChatStack from '../Chat'
import QuizStack from '../Quiz'
import { Stacks } from '../STACKS'

import { Icon } from '@/Components'

const { Navigator, Group, Screen } = createBottomTabNavigator()

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
      <Group>
        <Screen
          component={ChatStack}
          name={Stacks.CHAT_STACK}
          options={tabOptions(({ focused }) => (
            <Icon name={focused ? 'chat' : 'chat-outline'} size="4xl" />
          ))}
        />
        <Screen
          component={HomeStack}
          name={Stacks.HOME_STACK}
          options={tabOptions(({ focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} size="6xl" />
          ))}
        />

        <Screen
          component={QuizStack}
          name={Stacks.QUIZ_STACK}
          options={tabOptions(({ focused }) => (
            <Icon
              name={focused ? 'beaker-question' : 'beaker-question-outline'}
              size="4xl"
            />
          ))}
        />
      </Group>
    </Navigator>
  )
}
