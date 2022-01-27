import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button } from '@/Components'

export default function () {
  return (
    <AuthContainer headerProps={{ heading: 'Signup' }}>
      <Div p="sm">
        <Text>SIGNUP SCREEN</Text>
      </Div>
    </AuthContainer>
  )
}
