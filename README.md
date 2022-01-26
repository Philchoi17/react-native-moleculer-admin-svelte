# App Setup

```
index.ts -> entry point

src/
  App.tsx -> where app is rendered
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
