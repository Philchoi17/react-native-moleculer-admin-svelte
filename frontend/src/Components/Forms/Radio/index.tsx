import * as React from 'react'
import { Radio, RadioProps } from 'react-native-magnus'
import { FormikContextType, FormikValues, useFormikContext } from 'formik'

import Text from '../../Text'
import Error from '../Error'

{
  /* <Radio.Group>
<Radio value={1} prefix={<Text flex={1}>Option 1</Text>} />
<Radio value={2} prefix={<Text flex={1}>Option 2</Text>} />
<Radio value={3} prefix={<Text flex={1}>Option 3</Text>} />
</Radio.Group> */
}

interface OptionProp {
  label: string
  value: string
}

interface Props {
  // onChange: (val: string) => void
  options: OptionProp[]
  val: string
}

export default function GDRadio({ options, val }: Props) {
  const { setFieldTouched, handleChange, errors, touched } =
    // FormikContextType
    useFormikContext<FormikValues>()
  return (
    <>
      <Radio.Group
        onChange={handleChange(val)}
        m="sm"
        p="sm"
        defaultValue={options[0].value}>
        {options.map((option: OptionProp, idx: number) => (
          <Radio
            key={String(idx)}
            value={option.value}
            prefix={<Text flex={1}>{option.label}</Text>}>
            {/*  */}
          </Radio>
        ))}
      </Radio.Group>
      <Error error={errors[val]} visible={touched[val]} />
    </>
  )
}
