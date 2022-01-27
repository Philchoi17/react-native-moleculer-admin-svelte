import * as React from 'react'
import { Input, InputProps } from 'react-native-magnus'
import { FormikContextType, FormikValues, useFormikContext } from 'formik'

import Error from '../Error'
import { Text } from '@/Components'
import Logger from '@/Utils/Logger'

// interface ProfileFields {
//   email: string
//   password: string
// }

interface Props extends InputProps {
  label?: string
  val: string
  width?: string | number
  rest?: any
}

export default function PCInput({
  label,
  val,
  width = '100%',
  placeholder,
  ...rest
}: Props) {
  const { setFieldTouched, handleChange, errors, touched } =
    // FormikContextType
    useFormikContext<FormikValues>()

  return (
    <>
      {label && (
        <Text size="xl" ml="sm">
          {label}
        </Text>
      )}
      <Input
        fontSize="xl"
        placeholder={placeholder}
        focusBorderColor="blue700"
        my="sm"
        onBlur={() => (val ? setFieldTouched(val) : null)}
        onChangeText={handleChange(val)}
        w={width}
        {...rest}
      />
      <Error error={errors[val]} visible={touched[val]} />
    </>
  )
}
