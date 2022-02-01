import * as React from 'react'
import {
  Drawer,
  DrawerProps,
  DrawerRef,
  Div,
  Header,
} from 'react-native-magnus'

import Text from '../Text'
import Icon from '../Icon'
import Button from '../Button'
import Image from '../Image'
import Logger from '@/Utils/Logger'
import AppLogos from '@/Assets/Logos'

interface Props {
  drawerRef: React.RefObject<DrawerRef>
  drawerItems: JSX.Element[]
}

export default function ({ drawerRef, drawerItems }: Props) {
  const closeDrawer = () => drawerRef?.current?.close()
  return (
    <Drawer ref={drawerRef}>
      <Header
        shadow="none"
        suffix={
          <Button onPress={closeDrawer} bg="transparent">
            <Icon name="close" size="5xl" color="black" />
          </Button>
        }>
        <Text weight="700" size="xl">
          Menu
        </Text>
      </Header>
      <Div p="md" alignItems="center" flex={1}>
        <Div flex={1}>
          <Image source={AppLogos.logo} h={112} w={112} rounded="circle" />
          <Text textAlign="center">Profile name</Text>
        </Div>
        {drawerItems.map((DrawerItem, idx) => DrawerItem)}
      </Div>
    </Drawer>
  )
}
