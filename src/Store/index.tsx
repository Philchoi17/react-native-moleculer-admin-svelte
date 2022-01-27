import * as React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import GLOBAL from './Global'

interface Props {
  children: JSX.Element
}

const middlewares = [
  /*logger*/
]

const reducer: any = {
  GLOBAL,
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
  // [api.reducerPath]: api.reducer,
  // ...Object.values(modules).reduce(
  //   (acc, module) => ({
  //     ...acc,
  //     [module.reducerPath]: module.reducer,
  //   }),
  //   {},
  // ),
}

const store = configureStore({
  reducer,
  // preloadedState,
  // middleware: (getDefaultMiddleware: any) => [
  //   ...getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  //   ...middlewares,
  //   api.middleware,
  // ],
  enhancers: [],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default function ({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}
