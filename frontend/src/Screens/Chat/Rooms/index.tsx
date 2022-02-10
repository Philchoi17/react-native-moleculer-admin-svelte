import * as React from 'react'
import { FlatList, FlatListProps, StyleSheet } from 'react-native'
import {
  Div,
  WINDOW_HEIGHT as height,
  WINDOW_WIDTH as width,
} from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

import MainContainer from '@/Containers/MainContainer'
import { Text, Misc, Button, Icon } from '@/Components'
import { ChatRoutes } from '@/Screens/SCREENS'

export default function (): JSX.Element {
  const { navigate } = useNavigation()

  // const goToRequest = () => {
  //   navigate(ChatRoutes.REQUEST_SCREEN)
  // }

  const RequestButton = () => (
    <Button bg="transparent" onPress={() => {}} w={55} p="none">
      <Icon name="account-plus-outline" size="6xl" />
    </Button>
  )

  // const goToPending = () => {
  //   navigate(ChatRoutes.PENDING)
  // }

  const PendingButton = () => (
    <Button bg="transparent" onPress={() => {}} w={55} p="none">
      <Icon name="account-question-outline" size="6xl" />
    </Button>
  )
  return (
    <MainContainer
      headerProps={{
        heading: 'Chatrooms',
        headerRest: {
          prefix: null,
          suffix: (
            <Div row p="sm">
              <PendingButton />
              <RequestButton />
            </Div>
          ),
        },
      }}>
      <Div p="sm">
        <FlatList
          style={{ height }}
          ListEmptyComponent={<Misc.EmptyList emptyText={'No Chats...'} />}
          ItemSeparatorComponent={Misc.Seperator}
          data={[]}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={({ id }) => id}
        />
      </Div>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    height,
    width,
  },
})
