# App Setup

```
index.ts -> entry point
/src/
  App.tsx -> where app is rendered
  /Assets/
    /Images/
      /blah.png
    /Fonts
    /Icons
  /Components/
    TypeOfComponent
      index.tsx
      /Assets/
  /Containers/
    /TypeOfContainer/
      /index.tsx
      /Assets/
  /Context/
    /TypeOfContext/
      /index.ts
  /Navigators/
    index.tsx
    /typeOfNav/
      /index.tsx
  /Screens/
    /TypeOfScreen/
      index.tsx
      /Assets/
  /Store/
    /index.tsx
    /TypeOfStore
      /index.ts
  /Types/
    /index.ts
  /Utils
    Logger.ts
    /Permissions/
      /index.ts
    /Storage/
      index.ts
      storageItems.ts
```

# babel-plugin-module-resolver

```

for paths in src folder to point @ at src
i.e -> @/Components/ExampleComponent

https://www.npmjs.com/package/babel-plugin-module-resolver

yarn add --dev babel-plugin-module-resolver

const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json', '.tsx', '.ts'],
    alias: {
      '@': './src',
    },
  },
])

module.exports = {
  presets,
  plugins,
}
```

# react-native-clean-project

```
https://www.npmjs.com/package/react-native-clean-project

yarn add -D react-native-clean-project

"scripts": {
  "clean": "react-native-clean-project"
}
```

# react-native-rename --> to rename project

```
https://github.com/junedomingo/react-native-rename#readme

yarn add react-native-rename
1. git checkout -b rename-app
2. npx react-native-rename <newName>
3. npx react-native-rename "Travel App" -b com.<bundleIdentifier>
bundleIdentifier example: junedomingo.travelapp
```

# @react-native-async-storage/async-storage

```
https://github.com/react-native-async-storage/async-storage#readme

yarn add @react-native-async-storage/async-storage
```

# react-native-magnus

```
styling framework for react-native

1. yarn add react-native-magnus
2. yarn add color react-native-animatable react-native-modal react-native-vector-icons deepmerge validate-color

```

# react-native-vector-icons

```
https://github.com/oblador/react-native-vector-icons

some platform configurations needed to be done to run icons correctly
```

# react-navigation

```
https://reactnavigation.org/docs/getting-started
1. yarn add @react-navigation/native
2. yarn add react-native-screens react-native-safe-area-context
3. npx pod-install ios || cd ios && pod install ( i think )
4. android/app/src/main/java/<your package name>/MainActivity.java ->
  a.) add in MainActivity class:
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }
  b.) import android.os.Bundle; --> add at top of file
5. yarn add @react-navigation/native-stack
6. yarn add @react-navigation/bottom-tabs

* if side drawer is wanted:
https://reactnavigation.org/docs/drawer-navigator#installation
1. yarn add @react-navigation/drawer
2. yarn add react-native-gesture-handler react-native-reanimated

```

# State Management --> redux

```
https://redux.js.org/introduction/getting-started

toolkit:
yarn add @reduxjs/toolkit react-redux

```

# redux-devtools-extension

```

https://github.com/zalmoxisus/redux-devtools-extension

yarn add -D redux-devtools-extension

```

# react-native-community/hooks

```
https://github.com/react-native-community/hooks

yarn add @react-native-community/hooks

```

<!-- implement as needed -->

# zoontek/react-native-permissions

```
https://github.com/zoontek/react-native-permissions

yarn add react-native-permissions
```

# formik and yup

```
https://formik.org/docs/overview

https://www.npmjs.com/package/formik

yarn add formik
yarn add yup

import * as React from 'react'
import { Formik, FormikProps } from 'formik'

interface Props {
  initialValues: any
  onSubmit: any
  validationSchema: object
  children: any
}

export default function ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  )
}


```

# react-native-sensors

```
https://react-native-sensors.github.io/docs/Installation.html



```
