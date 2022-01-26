import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Div, Icon } from 'react-native-magnus'

export default function () {
  return (
    <Div flex={1} alignItems="center" justifyContent="center">
      <Icon
        fontFamily="MaterialCommunityIcons"
        name="close"
        color="black"
        fontSize="3xl"
      />
    </Div>
  )
}
