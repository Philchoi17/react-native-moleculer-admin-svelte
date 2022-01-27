import * as React from 'react'
import { Header, HeaderProps } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/core'

import { Icon, Button } from '@/Components'

interface Props extends HeaderProps {
  bottomLine?: boolean
  bottomLineWidth?: number
  children?: any
  suffix?: any
  rest?: any
}

export default function ({
  bottomLine,
  bottomLineWidth,
  children,
  suffix,
  ...rest
}: Props) {
  const { goBack } = useNavigation()
  return (
    <Header
      p="none"
      shadow="none"
      alignment="center"
      minH={56}
      fontWeight="bold"
      fontSize={18}
      lineHeight={26}
      suffix={suffix ? suffix : null}
      prefix={
        <Button bg="transparent" left={3} onPress={goBack}>
          <Icon size="6xl" name="chevron-left-circle-outline" />
        </Button>
      }
      textTransform="none"
      {...(bottomLine
        ? {
            borderBottomWidth: bottomLineWidth || 1,
            borderBottomColor: 'gray300',
          }
        : null)}
      {...rest}>
      {children}
    </Header>
  )
}
