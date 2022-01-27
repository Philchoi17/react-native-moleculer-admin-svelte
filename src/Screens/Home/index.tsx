import * as React from 'react'
import { Div } from 'react-native-magnus'

import { useAppSelector, useAppDispatch } from '@/Hooks'
import MainContainer from '@/Containers/MainContainer'
import { Text, Button, Icon } from '@/Components'
import { logoutUser } from '@/Store/Global'
import Config from '@/Config'

export default function () {
  const dispatch = useAppDispatch()
  const logout = () => {
    dispatch(logoutUser())
    Config.reset()
  }
  return (
    <MainContainer
      headerProps={{
        heading: 'Home',
        headerRest: {
          prefix: null,
          suffix: (
            <Div pr="sm">
              <Button bg="transparent" left={3} onPress={logout}>
                <Icon size="6xl" name="logout" />
              </Button>
            </Div>
          ),
        },
      }}>
      <Div alignItems="center" justifyContent="center" flex={1}>
        <Text>Hello World!</Text>
      </Div>
    </MainContainer>
  )
}
