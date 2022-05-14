import React from 'react';
import {GestureResponderEvent, View, ViewStyle} from 'react-native';
import {GoogleLogoIcon} from '../../assets/svg';
import TextView from '../text-view';
import Touch from '../touch';
import {
  largeButton,
  smallButton,
  primaryButton,
  secondaryButton,
  googleButton,
} from './styles';

interface Props {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary';
  style?: ViewStyle;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  onPress,
  label,
  size = 'large',
  type = 'primary',
  children,
  style,
  disabled,
}) => {
  const sizeStyles = size === 'large' ? largeButton : smallButton;
  const typeStyles = type === 'secondary' ? secondaryButton : primaryButton;
  return (
    <Touch
      disabled={disabled}
      style={[style, sizeStyles.container, typeStyles.container]}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <TextView style={[sizeStyles.text, typeStyles.text]}>{label}</TextView>
      )}
    </Touch>
  );
};

const GoogleLoginButton = ({
  disabled,
  onPress,
}: {
  onPress: () => any;
  disabled?: boolean;
}) => {
  return (
    <Touch onPress={onPress} disabled={disabled} style={googleButton.btnTouch}>
      <View style={googleButton.btnIconContainer}>
        <GoogleLogoIcon />
      </View>
      <TextView color="GREYDARKER" style={googleButton.btnText}>
        {'Sign In with Google'}
      </TextView>
    </Touch>
  );
};

export default Button;
export {GoogleLoginButton};
