import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { AppsIcon, BookmarkIcon, EstateIcon, UserIcon } from '../../assets/svg';
import {NavigationProps} from '../../components/navigator/stack';
import {createTabNavigator} from '../../components/navigator/tab';
import TextView from '../../components/text-view';

interface Props {
  navigation: NavigationProps;
}

const TestTabNavigator = createTabNavigator({
  screens: {
    tab1: {
      screen: () => <View style={{flex: 1, backgroundColor: 'black'}}></View>,
      // title: 'Tab1',
      icon: EstateIcon,
    },
    tab2: {
      screen: () => <View style={{flex: 1, backgroundColor: 'grey'}}></View>,
      // title: 'Tab2',
      icon: AppsIcon,
    },
    tab3: {
      screen: () => <View style={{flex: 1, backgroundColor: 'red'}}></View>,
      // title: 'Tab1',
      icon: BookmarkIcon,
    },
    tab4: {
      screen: () => <View style={{flex: 1, backgroundColor: 'yellow'}}></View>,
      // title: 'Tab2',
      icon: UserIcon,
    },
  },
});

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TextView color='PURPLEPRIMARY' >Home Screen</TextView>
      <TouchableOpacity
        onPress={() => {
          if (typeof navigation?.push === 'function') {
            navigation.push('profile');
          }
        }}>
        <Text>Go To Profile</Text>
      </TouchableOpacity>
      <TestTabNavigator />
    </View>
  );
};

export default Home;
