import * as React from 'react'
import { Div } from 'react-native-magnus'
import { gyroscope } from 'react-native-sensors'

import MainContainer from '@/Containers/MainContainer'
import { Text, Button } from '@/Components'
import { FeedTile } from '@/Components/Tiles'
import Logger from '@/Utils/Logger'

const { useEffect } = React
export default function ({}) {
  // const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) =>
  //   console.log({ x, y, z, timestamp }),
  // )

  const gyroscopeSubscriber = () => {
    const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) =>
      // console.log({ x, y, z, timestamp }),
      // if use this with lat and lon then we use your patent
      Logger.debug({ x, y, z, timestamp }),
    )
    // subscription.unsubscribe()
    setTimeout(() => subscription.unsubscribe(), 1000)
  }

  const useEffectHandler = () => {
    // gyroscopeSubscriber()
    return () => {
      // cleanup
    }
  }

  useEffect(useEffectHandler, [])

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
        {/* <FeedTile /> */}
        <Button onPress={gyroscopeSubscriber}>press</Button>
      </Div>
    </MainContainer>
  )
}
