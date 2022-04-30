import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LeftArrowIcon} from '../../assets/svg';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';

interface Props {
  url: string;
  title: string;
  closeView: () => any;
}

const Header: React.FC<Props> = ({url, title, closeView}) => {
  return (
    <View style={styles.container}>
      <Touch onPress={closeView} style={styles.iconContainer}>
        <LeftArrowIcon width={24} height={24} />
      </Touch>
      <View style={styles.urlContainer}>
        <TextView numberOfLines={1}>{title}</TextView>
        <TextView numberOfLines={1}>{url}</TextView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  iconContainer: {
    padding: 8,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  urlContainer: {
    flex: 1,
  },
});
