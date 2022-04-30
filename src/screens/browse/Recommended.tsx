import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useTopHeadlines} from '../../apis';
import {
  Article1Img,
  Article2Img,
  Recommend1Img,
  Recommend2Img,
  Recommend3Img,
} from '../../assets/image';
import {NavigationProps} from '../../components/navigator/stack';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';
import useUniqueId from '../../hooks/useUniqueId';
import COLORS from '../../theme/colors';
import RecommendedCard from './RecommendCard';

const data = [
  {
    id: 'rec1',
    title: 'UI/UX Design',
    subTitle: 'A Simple Trick For Creating Color Palettes Quickly',
    image: Recommend1Img,
  },
  {
    id: 'rec2',
    title: 'Art',
    subTitle: 'Six steps to creating a color palette',
    image: Recommend2Img,
  },
  {
    id: 'rec3',
    title: 'Colors',
    subTitle: 'Creating Color Palette from world around you',
    image: Recommend3Img,
  },
];

interface Props {
  navigation: NavigationProps;
}

const Recommended: React.FC<Props> = ({navigation}) => {
  const uniqueId = useUniqueId();
  const {articles, totalResults, loading} = useTopHeadlines();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextView style={styles.headTitle} color="BLACKPRIMARY">
          {'Recommended for you'}
        </TextView>
        <Touch>
          <TextView style={styles.headButton} color="GREYPRIMARY">
            {'See All'}
          </TextView>
        </Touch>
      </View>
      {loading ? (
        <View
          style={{
            height: 280,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={COLORS['PURPLEPRIMARY']} />
        </View>
      ) : (
        <View style={styles.cardsContainer}>
          {Array.isArray(articles) && articles?.length
            ? articles.map((item, index) => {
                const data = {
                  id: `${uniqueId}-${index}`,
                  title: item.title,
                  subTitle: item.description,
                  image: {uri: item.urlToImage},
                };

                const onPress=()=>{
                  navigation.push('webview', {
                    uri: item.url
                  })
                }

                return (
                  <>
                    <RecommendedCard key={data.id} onPress={onPress} {...data} />
                    {index < articles.length - 1 ? (
                      <View key={`${data.id}-gap`} style={{height: 16}} />
                    ) : (
                      void 0
                    )}
                  </>
                );
              })
            : void 0}
        </View>
      )}
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  headButton: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  cardsContainer: {
    marginTop: 24,
  },
});
