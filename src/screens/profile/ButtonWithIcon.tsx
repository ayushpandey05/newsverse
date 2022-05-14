import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/button';
import TextView from '../../components/text-view';

const ButtonWithIcon = ({label, icon: Icon, disabled, onPress}: any) => {
  return (
    <Button onPress={onPress} disabled={disabled} type="secondary" style={styles.container}>
      <TextView color="GREYDARKER" style={styles.label}>
        {label}
      </TextView>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
    </Button>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    flex: 1,
    marginVertical: 16,
    marginLeft: 24,
    marginRight: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
