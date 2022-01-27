import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Group, Screen } = createNativeStackNavigator()

export default function () {
  return (
    <Navigator>
      <Group>{/* <Screen /> */}</Group>
    </Navigator>
  )
}
