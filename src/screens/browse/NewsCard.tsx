import React from 'react';
import {
  // Image,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Image from 'react-native-fast-image';
import {PhotoIcon, BookmarkV2EmptyIcon, BookmarkV2FilledIcon} from '../../assets/svg';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';
import {useBookmarkStore} from '../../context/Store';
import COLORS from '../../theme/colors';

interface Props {
  id: string;
  title: string;
  subTitle: string;
  image: any;
  onPress?: () => any;
  isBookmark?: boolean;
  onPressBookmarkIcon?: () => any;
}

const NewsCard: React.FC<Props> = ({
  isBookmark,
  onPressBookmarkIcon,
  image,
  id,
  title,
  subTitle,
  onPress,
}) => {
  const {width} = useWindowDimensions();

  const cardStyle = {
    width: Math.floor(width * 0.68),
    height: Math.floor(width * 0.68),
  };

  const BookmarkIcon = isBookmark ? BookmarkV2FilledIcon : BookmarkV2EmptyIcon 

  return (
    <Touch onPress={onPress} style={[cardStyle, styles.container]}>
      <View style={styles.imageBgContainer}>
        <PhotoIcon width="100%" height="100%" />
      </View>
      <Image source={image} style={styles.bgImage} />
      <View style={styles.contentContainer}>
        <Touch onPress={onPressBookmarkIcon} style={styles.iconContainer}>
          <BookmarkIcon fill={COLORS[isBookmark ? 'PURPLEDARKER' : 'WHITE']} />
        </Touch>
        <View>
          <TextView numberOfLines={1} style={styles.title} color="GREYLIGHTER">
            {title}
          </TextView>
          <TextView
            numberOfLines={2}
            style={styles.subTitle}
            color="GREYLIGHTER">
            {subTitle}
          </TextView>
        </View>
      </View>
    </Touch>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 24,
    // padding: 24,
  },
  imageBgContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: COLORS['PURPLELIGHT'],
    padding: 20,
  },
  bgImage: {width: '100%', height: '100%'},
  iconContainer: {width: 40, height: 40, padding: 8, alignSelf: 'flex-end'},
  title: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    marginRight: 8,
  },
  subTitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    marginRight: 8,
  },
});
