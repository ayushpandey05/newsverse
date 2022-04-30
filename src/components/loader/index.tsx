import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';

interface Props {
  visibility?: boolean;
}

const Loader: React.FC<Props> = ({visibility = true}) => {
  if (!visibility) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS['PURPLEPRIMARY']} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
