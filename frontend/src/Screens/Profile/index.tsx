import * as React from 'react'
import { Div } from 'react-native-magnus'

import MainContainer from '@/Containers/MainContainer'
import { Text } from '@/Components'

export default function () {
  return (
    <MainContainer
      headerProps={{
        heading: 'Profile',
      }}>
      <Div p="sm" alignItems="center" justifyContent="center" flex={1}>
        <Text>Hello Profile</Text>
      </Div>
    </MainContainer>
  )
}
