import * as React from 'react'
import { Div } from 'react-native-magnus'

import MainContainer from '@/Containers/MainContainer'
import { Text } from '@/Components'
import { FeedTile } from '@/Components/Tiles'

export default function ({}) {
  return (
    <MainContainer
      headerProps={{
        heading: 'Practice',
        headerRest: {
          prefix: null,
        },
      }}>
      <Div flex={1} p="md">
        <Text>Practice</Text>
        <FeedTile />
      </Div>
    </MainContainer>
  )
}
