import React from 'react';
import {StyleSheet, View} from 'react-native';
import Image from 'react-native-fast-image';
import COLORS, {COLOR_NAMES} from '../../theme/colors';
import TextView from '../text-view';

const generateAvatarText = (name: string) => {
  if (typeof name !== 'string' || !name) {
    return '';
  }

  const nameArr = name.split(' ');
  let avatarText = '';
  for (let i = 0; i < nameArr.length; i++) {
      const item = nameArr[i];
    if (item?.length > 0) {
      avatarText += item[0];
    }
    if (avatarText?.length > 1) {
      break;
    }
  }
  return avatarText;
};

const Avatar = ({image, name, size = 72}: any) => {
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: Math.ceil(size / 2),
  };

  const avatarText = generateAvatarText(name);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.textContainer}>
        <TextView color="PURPLEPRIMARY" style={styles.text}>
          {avatarText}
        </TextView>
      </View>
      <Image
        style={{width: 72, height: 72}}
        resizeMode="contain"
        source={image}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS[COLOR_NAMES.purpleLight],
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS[COLOR_NAMES.greyLighter],
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
});
