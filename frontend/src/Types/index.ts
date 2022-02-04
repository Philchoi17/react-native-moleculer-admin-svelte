export type userType = {
  _id: string
  age: number
  createdAt: string
  updatedAt: string
  email: string
  gender: string
  name: string
  password: string
}
// {"_id": "61f114357415ed1ca3e5d552",
// "age": 20, "createdAt": "2022-01-26T09:28:21.383Z", "email": "guest@gmail.com", "gender": "male", "name": "something", "password": "123456", "updatedAt": "2022-01-26T09:28:21.383Z"}

export type feedType = {
  _id: string
  date: string
  description: string
  image: string
  link: string
  title: string
}

export type userPayloadType = {
  age: number
  email: string
  gender: string
  name: string
  password: string
  confirmPassword: string
}

// "_id": 1,
// "date": "test",
// "description": "test",
// "image": "test",
// "link": "test",
// "title": "test"
