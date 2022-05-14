import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Touch: React.FC<TouchableOpacityProps> = ({
  style,
  onPressIn,
  onPressOut,
  activeOpacity,
  ...restProps
}) => {
  const animValue = new Animated.Value(1);

  const runAnim = (toValue: number) => {
    Animated.timing(animValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressInTouch = (event: GestureResponderEvent) => {
    runAnim(0);
    if (typeof onPressIn === 'function') {
      onPressIn(event);
    }
  };

  const onPressOutTouch = (event: any) => {
    runAnim(1);
    if (typeof onPressOut === 'function') {
      onPressOut(event);
    }
  };

  return (
    <AnimatedTouchable
      {...restProps}
      activeOpacity={1}
      style={[
        style,
        {
          opacity: animValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
          }),
        },
      ]}
      onPressIn={onPressInTouch}
      onPressOut={onPressOutTouch}
    />
  );
};

export default Touch;
