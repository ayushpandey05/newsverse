import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useEverything} from '../../apis';
import {Article1Img, Article2Img} from '../../assets/image';
import {MicrophoneIcon, SearchIcon} from '../../assets/svg';
import Button from '../../components/button';
import {NavigationProps} from '../../components/navigator/stack';
import TextInput from '../../components/text-input';
import {AxiosInstance} from '../../config';
import {CATEGORY} from '../../constants/category';
import useDidMount from '../../hooks/useDidMount';
import useUniqueId from '../../hooks/useUniqueId';
import COLORS from '../../theme/colors';
import Category from './Category';
import Header from './Header';
import NewsCard from './NewsCard';
import Recommended from './Recommended';
// import TextView from '../../components/text-view';

const data = [
  'Random',
  'Sports',
  'Gaming',
  'Politics',
  'Random',
  'Sports',
  'Gaming',
  'Politics',
];

const newsData = [
  {
    id: 'news1',
    title: 'POLITICS',
    subTitle: 'The latest situation in the presidential election',
    image: Article1Img,
  },
  {
    id: 'news2',
    title: 'ART',
    subTitle: 'An updated daily front page',
    image: Article2Img,
  },
];

interface Props {
  navigation: NavigationProps;
}

const Browse: React.FC<Props> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          prefixIcon={{icon: SearchIcon}}
          suffixIcon={{icon: MicrophoneIcon}}
          placeholder="Email Address"
        />
      </View>
      <Category navigation={navigation} />
      <Recommended navigation={navigation} />
    </ScrollView>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 24,
  },
});
