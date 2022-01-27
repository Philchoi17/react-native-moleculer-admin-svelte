import * as React from 'react'
import { Div } from 'react-native-magnus'

import MainContainer from '@/Containers/MainContainer'
import { Text } from '@/Components'

export default function () {
  return (
    <MainContainer
      headerProps={{
        heading: 'Quiz Screens TEMP',
      }}>
      <Div p="sm">
        <Text>Quiz Screen</Text>
      </Div>
    </MainContainer>
  )
}
