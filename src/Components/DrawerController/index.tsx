import * as React from 'react'
import { Div, Drawer, Fab, DrawerRef, Host } from 'react-native-magnus'

import { Text, Icon, Button } from '@/Components'

interface Props {
  drawerRef: any // temp
}

export default function ({ drawerRef }: Props) {
  return (
    <>
      <Fab bg="blue600" h={50} w={50} bottom={85}>
        <Button
          p="none"
          bg="transparent"
          justifyContent="flex-end"
          onPress={() => {
            if (drawerRef.current) {
              drawerRef.current.open()
            }
          }}>
          <Div rounded="sm" bg="white" p="sm">
            <Text fontSize="md">Menu</Text>
          </Div>
          <Icon
            bg="blue500"
            color="light"
            name="menu"
            h={50}
            w={50}
            rounded="circle"
            ml="md"
            size="3xl"
          />
        </Button>
        <Button
          p="none"
          bg="transparent"
          justifyContent="flex-end"
          onPress={() => {}}>
          <Div rounded="sm" bg="white" p="sm">
            <Text fontSize="md">Profile</Text>
          </Div>
          <Icon
            bg="blue500"
            color="light"
            name="account-settings-outline"
            h={50}
            w={50}
            rounded="circle"
            ml="md"
            size="3xl"
          />
        </Button>
      </Fab>
    </>
  )
}
