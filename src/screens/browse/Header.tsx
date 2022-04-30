import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextView from '../../components/text-view';

const title = 'Browse';
const subTitle = 'Discover things of this world';

const Header = () => {
  return (
    <View style={styles.container}>
      <TextView style={styles.title} color="BLACKPRIMARY">
        {title}
      </TextView>
      <TextView style={styles.subTitle} color="GREYPRIMARY">
        {subTitle}
      </TextView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  subTitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontStyle: 'normal',
  },
});
