import React, {useState} from 'react';
import {FlatList, useWindowDimensions, View} from 'react-native';
import {useEverything} from '../../apis';
import Button from '../../components/button';
import Loader from '../../components/loader';
import {NavigationProps} from '../../components/navigator/stack';
import {CATEGORY} from '../../constants/category';
import {useBookmarkStore} from '../../context/Store';
import useUniqueId from '../../hooks/useUniqueId';
import NewsCard from './NewsCard';

interface Props {
  navigation: NavigationProps;
}

const Category: React.FC<Props> = ({navigation}) => {
  const uniqueId = useUniqueId();
  const [activeCategory, setActiveCategory] = useState(CATEGORY[0]);

  const {loading, articles} = useEverything({category: activeCategory});

  const {width} = useWindowDimensions();

  const cardStyle = {
    width: Math.floor(width * 0.68),
    height: Math.floor(width * 0.68),
  };

  const {addBookmark, removeBookmark, checkBookMark, bookmarks} =
    useBookmarkStore();
  // console.log('bookmarksbookmarks', bookmarks)
  return (
    <View>
      <FlatList
        style={{marginVertical: 24}}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={CATEGORY}
        renderItem={({item: label, index}) => {
          const onPress = () => {
            setActiveCategory(label);
          };
          return (
            <>
              <Button
                key={`${uniqueId}-button-${index}`}
                onPress={onPress}
                type={label === activeCategory ? 'primary' : 'secondary'}
                size="small"
                label={label.toUpperCase()}
              />
              {index < CATEGORY.length - 1 ? (
                <View
                  key={`${uniqueId}-button-gap-${index}`}
                  style={{width: 12}}
                />
              ) : (
                void 0
              )}
            </>
          );
        }}
      />
      <View>
        <View style={{height: cardStyle.height}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
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

              const isBookmark = checkBookMark(item);
              const onPressBookmarkIcon = () => {
                if (isBookmark) {
                  removeBookmark(item);
                } else {
                  addBookmark(item);
                }
              };

              return (
                <>
                  <NewsCard
                    isBookmark={isBookmark}
                    key={data.id}
                    onPress={onPress}
                    onPressBookmarkIcon={onPressBookmarkIcon}
                    {...data}
                  />
                  {index < articles.length - 1 ? (
                    <View key={`${data.id}-gap`} style={{width: 12}} />
                  ) : (
                    void 0
                  )}
                </>
              );
            }}
          />
          {loading ? <Loader /> : <></>}
        </View>
      </View>
    </View>
  );
};

export default Category;
