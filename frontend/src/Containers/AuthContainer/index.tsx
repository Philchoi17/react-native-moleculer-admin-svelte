import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// import Config from '@/Config'
import { Header } from '@/Components'

interface HeaderProps {
  heading: string
  suffix?: JSX.Element
}

interface Props {
  children: any
  headerProps?: HeaderProps
}

export default function ({ children, headerProps }: Props) {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <Div bg="light" flex={1} pb={bottom} pt={top}>
      {headerProps && (
        <Header
          bottomLine
          suffix={headerProps.suffix ? headerProps.suffix : null}>
          {headerProps.heading}
        </Header>
      )}
      {children}
    </Div>
  )
}
