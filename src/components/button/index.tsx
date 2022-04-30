import React from 'react';
import {GestureResponderEvent} from 'react-native';
import TextView from '../text-view';
import Touch from '../touch';
import {
  largeButton,
  smallButton,
  primaryButton,
  secondaryButton,
} from './styles';

interface Props {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  onPress,
  label,
  size = 'large',
  type = 'primary',
}) => {
  const sizeStyles = size === 'large' ? largeButton : smallButton;
  const typeStyles = type === 'secondary' ? secondaryButton : primaryButton;
  return (
    <Touch
      style={[sizeStyles.container, typeStyles.container]}
      onPress={onPress}>
      <TextView style={[sizeStyles.text, typeStyles.text]}>{label}</TextView>
    </Touch>
  );
};

export default Button;
