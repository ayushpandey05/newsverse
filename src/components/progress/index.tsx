import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import COLORS from '../../theme/colors';

interface Props {
  progress: number;
  width?: number;
}

const Progress: React.FC<Props> = ({progress, width}) => {
  const useNumber = typeof width === 'number' && true;

  const [visible, setVisible] = useState(false);

  const [viewWidth, setViewWidth] = useState(0);

  const animValue = useRef(new Animated.Value(0)).current;

  const runAnim = (value: number) => {
    Animated.timing(animValue, {
      toValue: value,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    runAnim(progress);
    if (progress === 1) {
      setTimeout(() => {
        setVisible(false);
      }, 500);
    } else {
      setVisible(true);
    }
  }, [progress]);

  const initialValue = useNumber ? 0 : '0%';
  const finalValue = useNumber ? width : '100%';

  const outputRange: any[] = [initialValue, finalValue];

  return (
    <View
      onLayout={e => {
        setViewWidth(e.nativeEvent.layout.width);
      }}>
      <Animated.View
        style={[
          styles.progress,
          !visible && styles.hiddenProgress,
          {
            width: animValue.interpolate({
              inputRange: [0, 1],
              outputRange,
            }),
          },
        ]}
      />
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  progress: {
    height: 2,
    backgroundColor: COLORS['PURPLEPRIMARY'],
  },
  hiddenProgress: {
    backgroundColor: 'transparent',
  },
});
