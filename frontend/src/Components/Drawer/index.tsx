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
import Logger from '@/Utils/Logger'
// import Image from '../Image'

interface Props {
  drawerRef: React.RefObject<DrawerRef>
  drawerItems: JSX.Element[]
}

export default function ({ drawerRef, drawerItems }: Props) {
  const closeDrawer = () => {
    Logger.debug('close drawer function')
  }
  return (
    <Drawer ref={drawerRef}>
      <Header
        suffix={
          <Button onPress={closeDrawer}>
            <Icon name="close" />
          </Button>
        }>
        <Text weight="700" size="xl">
          Menu
        </Text>
      </Header>
      <Div p="md" alignItems="center" flex={1}>
        {drawerItems.map((DrawerItem, idx) => DrawerItem)}
      </Div>
    </Drawer>
  )
}
