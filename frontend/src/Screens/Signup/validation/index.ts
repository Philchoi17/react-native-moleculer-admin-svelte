import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string()
    .required('Passwords must match.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  name: Yup.string().required().min(2).label('Name'),
  age: Yup.number().required().min(18).label('Age'),
  gender: Yup.string().required().label('Gender'),
})
