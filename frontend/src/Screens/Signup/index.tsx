import * as React from 'react'
import { Div } from 'react-native-magnus'
import { useNavigation } from '@react-navigation/native'

import AuthContainer from '@/Containers/AuthContainer'
import { Text, Button, KeyboardAvoider } from '@/Components'
import { Form, Input, Submit, Radio } from '@/Components/Forms'
import { validationSchema } from './validation'
import Logger from '@/Utils/Logger'
import { userPayloadType } from '@/Types'
import AuthService from '@/Services/Auth'
import { AuthScreenProps } from '@/Navigators/NavStackParams'

export default function () {
  const navigation = useNavigation<AuthScreenProps>()

  const genderSelection = [
    { label: 'Prefer Not To Say', value: 'n/a' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]

  const signup = async (userPayload: userPayloadType) => {
    try {
      Logger.debug('payload =', userPayload)
      const create = await AuthService.signupAttempt(userPayload)
      if (create) return navigation.goBack()
      throw 'something went wrong ...'
    } catch (error) {
      Logger.error('createUserHandler: error =', error)
      return
    }
  }

  return (
    <AuthContainer headerProps={{ heading: 'Signup' }}>
      {/* <KeyboardAvoider> */}
      <Form
        validationSchema={validationSchema}
        onSubmit={signup}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          age: null,
          gender: '',
        }}>
        <Div p="md">
          <Input
            label="Email"
            val="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Input
            label="Password"
            val="password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
          />
          <Input
            label="Confirm Password"
            val="confirmPassword"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
          />
          <Input
            label="Name"
            val="name"
            autoCorrect={false}
            textContentType="name"
          />
          <Input
            label="Age"
            val="age"
            keyboardType="numeric"
            // placeholder='22"'
            maxLength={2}
          />
          <Radio options={genderSelection} val="gender" />
          <Div>
            <Submit title="Signup" />
          </Div>
        </Div>
      </Form>
      {/* </KeyboardAvoider> */}
    </AuthContainer>
  )
}
