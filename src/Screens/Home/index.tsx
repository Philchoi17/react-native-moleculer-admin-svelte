import * as React from 'react'
import { Div } from 'react-native-magnus'

import MainContainer from '@/Containers/MainContainer'
import { Text } from '@/Components'

export default function () {
  return (
    <MainContainer headerProps={{ heading: 'Home' }}>
      <Div alignItems="center" justifyContent="center" flex={1}>
        <Text>Hello World!</Text>
      </Div>
    </MainContainer>
  )
}
