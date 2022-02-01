import * as React from 'react'
import { Div, Button, ButtonProps, DivProps } from 'react-native-magnus'

import Text from '../../Text'
import Icon from '../../Icon'

interface Props extends ButtonProps {
  title: string
  description: string
  link: string
  rest?: any
}

export default function ({
  title,
  description,
  link,
  ...rest
}: Props): JSX.Element {
  return (
    <Button block color="white" p="none" m="lg" onPress={() => {}} {...rest}>
      <Div
        p="lg"
        flex={1}
        // bgImg={{
        //   uri: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        // }}
      >
        <Text color="white" fontSize="3xl" fontWeight="bold">
          {title}
        </Text>
        <Text color="white" fontSize="sm" mt="sm" opacity={0.9}>
          {description}
        </Text>
        <Div row mt="xl">
          <Text color="white">{link}</Text>
          <Icon name="arrow-right-bold-outline" color="white" ml="md" />
        </Div>
      </Div>
    </Button>
  )
}
