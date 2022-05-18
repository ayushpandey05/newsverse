import React, {useEffect, useState} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {useTopHeadlines} from '../../apis';
import Header from '../../components/header';
import Loader from '../../components/loader';
import {NavigationProps} from '../../components/navigator/stack';
import useUniqueId from '../../hooks/useUniqueId';
import COLORS, {COLOR_NAMES} from '../../theme/colors';
import RecommendedCard from '../browse/RecommendCard';

interface Props {
  navigation: NavigationProps;
}

const TopHeadlines: React.FC<Props> = ({navigation}) => {
  const {articles, totalResults, loading, loadMore, canLoadMore, reload} =
    useTopHeadlines({pageSize: 15});
  const uniqueId = useUniqueId();
  const [isRefereshing, setRefereshing] = useState(false);

  const onRefresh = () => {
    setRefereshing(true);
    reload();
  };

  useEffect(() => {
    if (!loading && isRefereshing) {
      setRefereshing(false);
    }
  }, [loading]);

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <Header onBackPress={onBackPress} title="Top Headlines" />
      <FlatList
        onEndReachedThreshold={1} // so when you are at 5 pixel from the bottom react run onEndReached function
        onEndReached={loadMore}
        refreshControl={
          <RefreshControl
            colors={[COLORS[COLOR_NAMES.purplePrimary]]}
            refreshing={isRefereshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{padding: 20}}
        data={articles}
        renderItem={({item, index}) => {
          const data = {
            id: `${uniqueId}-${index}`,
            title: item.title,
            subTitle: item.description,
            image: {uri: item.urlToImage},
          };

          const onPress = () => {
            navigation.push('webview', {
              uri: item.url,
            });
          };
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
        }}
      />
      {loading ? <Loader /> : void 0}
    </>
  );
};

export default TopHeadlines;
