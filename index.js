import * as React from 'react'
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
  View
} from 'react-native'

export const withDismissKeyboard = (Comp) => (
  (props) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props} />
    </TouchableWithoutFeedback>
  )
)

export const touchableWithDismissKeyboard = (Touchable) => (
  class DismissKeyboardTouchable extends React.Component {
    onLongPress = (event) => {
      const { onLongPress } = this.props
      Keyboard.dismiss()

      if (onLongPress) {
        onLongPress(event)
      }
    }

    onPress = (event) => {
      const { onPress } = this.props
      Keyboard.dismiss()

      if (onPress) {
        onPress(event)
      }
    }

    onPressIn = (event) => {
      const { onPressIn } = this.props
      Keyboard.dismiss()

      if (onPressIn) {
        onPressIn(event)
      }
    }

    onPressOut = (event) => {
      const { onPressOut } = this.props
      Keyboard.dismiss()

      if (onPressOut) {
        onPressOut(event)
      }
    }

    render() {
      return (
        <Touchable
          {...this.props}
          onLongPress={this.onLongPress}
          onPress={this.onPress}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
        />
      )
    }
  }
)

export const DismissKeyboardTouchableWithoutFeedback = touchableWithDismissKeyboard(
  TouchableWithoutFeedback
)

export const DismissKeyboardTouchableHighlight = touchableWithDismissKeyboard(
  TouchableHighlight
)

export const DismissKeyboardTouchableOpacity = touchableWithDismissKeyboard(
  TouchableOpacity
)

export const DismissKeyboardTouchableNativeFeedback = touchableWithDismissKeyboard(
  TouchableNativeFeedback
)

export const DismissKeyboardView = withDismissKeyboard(View)
