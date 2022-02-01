import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DrawerRef } from 'react-native-magnus'

import HomeStack from '../Home'
import ChatStack from '../Chat'
import QuizStack from '../Quiz'
import { Stacks } from '../STACKS'

import { Drawer, DrawerController, Icon } from '@/Components'

import Practice from '@/Screens/Practice'

const { Navigator, Group, Screen } = createBottomTabNavigator()

const tabOptions = (
  tabBarIcon: ({ focused }: { focused: boolean }) => JSX.Element,
) => ({
  lazy: true,
  tabBarIcon,
})

export default function () {
  // const drawerRef = React.createRef<DrawerRef>()
  return (
    <>
      {/* <Drawer drawerRef={drawerRef} drawerItems={[]} /> */}
      <Navigator
        initialRouteName={Stacks.HOME_STACK}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Group>
          <Screen
            component={ChatStack}
            name={Stacks.CHAT_STACK}
            options={tabOptions(({ focused }) => (
              <Icon name={focused ? 'chat' : 'chat-outline'} size="6xl" />
            ))}
          />
          <Screen
            component={HomeStack}
            name={Stacks.HOME_STACK}
            options={tabOptions(({ focused }) => (
              <Icon
                bottom={8}
                h={66}
                w={66}
                name={focused ? 'home' : 'home-outline'}
                size="6xl"
                bg="grey"
                rounded="circle"
              />
            ))}
          />

          <Screen
            component={QuizStack}
            name={Stacks.QUIZ_STACK}
            options={tabOptions(({ focused }) => (
              <Icon
                name={focused ? 'beaker-question' : 'beaker-question-outline'}
                size="6xl"
              />
            ))}
          />
          {/* <Screen
            component={Practice}
            name={'PRACTICE'}
            options={tabOptions(({ focused }) => (
              <Icon name={focused ? 'play' : 'play-outline'} size="6xl" />
            ))}
          /> */}
        </Group>
      </Navigator>
      {/* <DrawerController
        drawerRef={drawerRef}
        navigateToProfile={navigateToProfile}
      /> */}
    </>
  )
}
