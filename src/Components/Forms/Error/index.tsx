import * as React from 'react'
// import { FormikErrors } from 'formik'

import { Text } from '@/Components'

interface Props {
  error: string | null | undefined | any
  visible: boolean | null | undefined | any
}

export default function PCErrorMsg({ error, visible }: Props) {
  if (!visible || !error) return null
  return (
    <Text color="error" mb="xs">
      {error}
    </Text>
  )
}
