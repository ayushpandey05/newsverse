import React from 'react';
import {View} from 'react-native';
import {NavigationProps} from '../stack';

interface Props {
  screen: any;
  screenIndex: number;
  screenKey: string;
  params: any;
  visible: boolean;
  navigation?: NavigationProps;
}

const TabScreen: React.FC<Props> = ({
  screen: Screen,
  params,
  screenIndex,
  screenKey,
  visible,
  navigation,
}) => {
  return (
    <View
      style={{
        flex: 1,
        display: visible ? 'flex' : 'none',
        backgroundColor: 'white',
      }}>
      <Screen
        navigation={navigation}
        params={params}
        screenIndex={screenIndex}
        screenKey={screenKey}
      />
    </View>
  );
};

export default TabScreen;
