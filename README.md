# react-native-dismiss-keyboard-views
[![npm version](https://badge.fury.io/js/react-native-dismiss-keyboard-views.svg?t=1495378566925)](https://badge.fury.io/js/react-native-dismiss-keyboard-views)
[![Dependency Status](https://david-dm.org/iyegoroff/react-native-dismiss-keyboard-views.svg?t=1495378566925)](https://david-dm.org/iyegoroff/react-native-dismiss-keyboard-views)
[![devDependencies Status](https://david-dm.org/iyegoroff/react-native-dismiss-keyboard-views/dev-status.svg)](https://david-dm.org/iyegoroff/react-native-dismiss-keyboard-views?type=dev)
[![typings included](https://img.shields.io/badge/typings-included-brightgreen.svg?t=1495378566925)](index.d.ts)
[![npm](https://img.shields.io/npm/l/express.svg?t=1495378566925)](https://www.npmjs.com/package/react-native-dismiss-keyboard-views)

This is based on a code snippet from [this](https://stackoverflow.com/a/34779467/4134913) SO answer by Eric Kim

## Usage

```js
import {
  DismissKeyboardView,
  DismissKeyboardTouchableOpacity
} from 'react-native-dismiss-keyboard-views'

const view = (
  <DismissKeyboardView style={someStyle}>
    ...
  </DismissKeyboardView>
)

const touchable = (
  <DismissKeyboardTouchableOpacity
    onPress={() => console.log('Keyboard dismissed!')}
  >
    ...
  </DismissKeyboardTouchableOpacity>
)
```

