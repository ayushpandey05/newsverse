import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';

interface Props {
  id: string;
  title: string;
  subTitle: string;
  image: any;
  onPress?: ()=>any
}

const RecommendedCard: React.FC<Props> = ({image, title, subTitle, onPress}) => {
  return (
    <Touch onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.titleContainer}>
        <TextView color="GREYPRIMARY" numberOfLines={1} style={styles.title}>
          {title}
        </TextView>
        <TextView
          color="BLACKPRIMARY"
          numberOfLines={2}
          style={styles.subTitle}>
          {subTitle}
        </TextView>
      </View>
    </Touch>
  );
};

export default RecommendedCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {width: 96, height: 96, borderRadius: 12, overflow: 'hidden'},
  image: {width: '100%', height: '100%'},
  titleContainer: {flex: 1, marginLeft: 16},
  title: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  subTitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontStyle: 'normal',
  },
});
