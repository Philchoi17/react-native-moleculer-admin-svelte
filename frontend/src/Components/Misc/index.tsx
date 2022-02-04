import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Div,
  WINDOW_HEIGHT as height,
  WINDOW_WIDTH as width,
} from 'react-native-magnus'

import AppLogos from '@/Assets/Logos'
import { Text, Button, Image } from '@/Components'

interface SeperatorProps {
  color?: string
}
function Seperator({ color = 'gray300' }: SeperatorProps) {
  return <Div borderBottomWidth={0.5} borderBottomColor={color} rounded="xl" />
}

interface EmptyListProps {
  emptyText?: string
  moreActions?: JSX.Element
}

function EmptyList({ emptyText = 'Empty', moreActions }: EmptyListProps) {
  return (
    <Div style={styles.fullScreen} alignItems="center" justifyContent="center">
      <Image source={AppLogos.logo} h={58} w={58} />
      <Text size="2xl">{emptyText}</Text>
      {moreActions && moreActions}
    </Div>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    height,
    width,
  },
})

export default {
  Seperator,
  EmptyList,
}
