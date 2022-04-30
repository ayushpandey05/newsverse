import React from 'react';
import {View} from 'react-native';
import {NavigationProps} from '.';

interface Props {
  screen: any;
  screenIndex: number;
  screenKey: string;
  navigation: NavigationProps;
  params: any
}

const ScreenItem: React.FC<Props> = ({
  screen: Screen,
  screenIndex,
  screenKey,
  navigation,
  params
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <Screen
        navigation={navigation}
        screenIndex={screenIndex}
        screenKey={screenKey}
        params={params}
      />
    </View>
  );
};

export default ScreenItem;
