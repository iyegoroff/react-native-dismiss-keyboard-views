import * as React from 'react'
import {
  ViewProps,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
} from 'react-native'

export const withDismissKeyboard: <Props>(
  component: React.ComponentClass<Props>
) => React.ComponentClass<Props>

export const touchableWithDismissKeyboard: <Props extends TouchableWithoutFeedbackProps>(
  component: React.ComponentClass<Props>
) => React.ComponentClass<Props>

export declare class DismissKeyboardTouchableWithoutFeedback extends React.Component<
  TouchableWithoutFeedbackProps
> {}

export declare class DismissKeyboardTouchableHighlight extends React.Component<
  TouchableHighlightProps
> {}

export declare class DismissKeyboardTouchableOpacity extends React.Component<
  TouchableOpacityProps
> {}

export declare class DismissKeyboardTouchableNativeFeedback extends React.Component<
  TouchableNativeFeedbackProps
> {}

export declare class DismissKeyboardView extends React.Component<ViewProps> {}
