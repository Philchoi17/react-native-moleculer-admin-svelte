import * as React from 'react'
import { FlatList, FlatListProps, StyleSheet } from 'react-native'
import {
  Div,
  WINDOW_HEIGHT as height,
  WINDOW_WIDTH as width,
} from 'react-native-magnus'

import MainContainer from '@/Containers/MainContainer'
import { Text, Misc } from '@/Components'

export default function (): JSX.Element {
  return (
    <MainContainer
      headerProps={{
        heading: 'CHATS TEMP',
        headerRest: {
          prefix: null,
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
