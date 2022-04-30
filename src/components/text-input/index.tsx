import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput as Input,
  TextInputProps,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import COLORS, {COLOR_NAMES} from '../../theme/colors';
import Touch from '../touch';

interface Props extends TextInputProps {
  prefixIcon?: {
    icon?: React.FC<SvgProps>;
    onPress?: () => void;
  };
  suffixIcon?: {
    icon?: React.FC<SvgProps>;
    onPress?: () => void;
  };
}

const TextInput: React.FC<Props> = ({
  prefixIcon,
  suffixIcon,
  style,
  ...restProps
}) => {
  const [isActive, setIsActive] = useState(false);

  const onFocus = () => {
    setIsActive(true);
  };

  const onBlur = () => {
    setIsActive(false);
  };

  const renderComponent = (componentProps: any) => {
    const {icon: Icon, onPress} = componentProps || {};

    if (!Icon) {
      return null;
    }
    return (
      <Touch
        onPress={onPress}
        style={{
          width: 56,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon fill={COLORS[isActive ? 'PURPLEPRIMARY' : 'GREYPRIMARY']} />
      </Touch>
    );
  };

  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      {renderComponent(prefixIcon)}
      <Input onFocus={onFocus} onBlur={onBlur} style={styles.input} />
      {renderComponent(suffixIcon)}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderWidth: 1,
    backgroundColor: COLORS[COLOR_NAMES.greyLighter],
    borderColor: 'transparent',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  activeContainer: {
    borderColor: COLORS[COLOR_NAMES.purplePrimary],
    backgroundColor: COLORS[COLOR_NAMES.white],
  },
  input: {
    flex: 1,
    // padding: 0,
    fontSize: 16,
    // lineHeight: 24,
    fontWeight: '500',
    fontStyle: 'normal',
  },
});
