import * as React from 'react'
import { Div } from 'react-native-magnus'

import AuthContainer from '@/Containers/AuthContainer'
import { Text } from '@/Components'

export default function () {
  return (
    <AuthContainer>
      <Div flex={1} alignItems="center" justifyContent="center">
        <Text size="xl">Initial Screen</Text>
      </Div>
    </AuthContainer>
  )
}
