import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LeftArrowIcon} from '../../assets/svg';
import TextView from '../text-view';
import Touch from '../touch';

interface Props {
  title: string;
  onBackPress: () => any;
}

const Header: React.FC<Props> = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Touch
        onLayout={e => {
          console.log('@@@layout!>>>', e.nativeEvent.layout);
        }}
        onPress={onBackPress}
        style={styles.iconContainer}>
        <LeftArrowIcon width={32} height={32} />
      </Touch>
      <View style={styles.titleContainer}>
        <TextView color="GREYDARKER" style={styles.title} numberOfLines={1}>
          {title}
        </TextView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingVertical: 4,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
});
