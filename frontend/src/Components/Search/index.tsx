import * as React from 'react'
import { Input, InputProps, Div } from 'react-native-magnus'

import Icon from '../Icon'

interface Props extends InputProps {
  rest?: any
}

export default function ({ ...rest }: Props): JSX.Element {
  return (
    <Input
      placeholder="Search"
      p={10}
      focusBorderColor="blue700"
      suffix={<Icon name="magnify" size="4xl" />}
      {...rest}
    />
  )
}
