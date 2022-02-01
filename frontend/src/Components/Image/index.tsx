import * as React from 'react'
import { Image, Div, ImageProps } from 'react-native-magnus'

interface Props extends ImageProps {
  borderWidth?: number
  // imgSrc: any
  h: number
  w: number
  rounded?: string
  // rest?: ImageProps
}

export default function ({
  borderWidth,
  // imgSrc,
  h,
  w,
  rounded = 'none',
  ...rest
}: Props) {
  return (
    <Div alignItems="center" justifyContent="center" h={h} w={w}>
      <Image
        // source={source}
        h={h - 3}
        w={w - 3}
        resizeMode="contain"
        rounded={rounded}
        {...rest}
      />
    </Div>
  )
}
