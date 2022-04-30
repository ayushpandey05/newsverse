import React from 'react';
import {View} from 'react-native';
import useBackHandler from '../../../hooks/useBackHandler';
import useMultiState from '../../../hooks/useMultiState';
import useUniqueId from '../../../hooks/useUniqueId';
import ScreenItem from './ScreenItem';

interface Props {
  screens: {
    [key: string]: {
      screen: React.ReactNode | any;
    };
  };
  initialRoute?: string;
}

interface NavigationProps {
  push: (screenKey: string, params?: any) => void;
  pop: (numberOfScreens?: number) => void;
  replace: (screenKey: string, params?: any) => void;
  reset: (screenKey: string, params?: any) => void;
  goBack: () => void;
}

const StackNavigator: React.FC<Props> = props => {
  const {initialRoute, screens} = props;
  const uniqueId = useUniqueId();
  const {state, setState} = useMultiState({stack: [{screenKey: initialRoute}]});

  const {stack} = state;

  const getNavigation = (currentIndex: number) => {
    const navigation: any = {};
    navigation.push = async (screenKey: string, params: any) => {
      const newStack = [...stack];
      newStack[currentIndex + 1] = {screenKey, params};
      await setState({stack: newStack});
    };
    navigation.pop = async (numberOfScreens: number = 1) => {
      if (currentIndex + 1 > numberOfScreens) {
        const newStackTemp = [...stack];
        const newStack = newStackTemp.splice(
          0,
          currentIndex + 1 - numberOfScreens,
        );
        await setState({stack: newStack});
      }
    };
    navigation.replace = async (screenKey: string, params: any) => {
      const newStack = [...stack];
      newStack[currentIndex] = {screenKey, params};
      await setState({stack: newStack});
    };
    navigation.reset = async (screenKey: string, params: any) => {
      const newStack = [{screenKey, params}];
      await setState({stack: newStack});
    };
    navigation.goBack = async () => {
      if (currentIndex > 0) {
        const newStackTemp = [...stack];
        const newStack = newStackTemp.splice(0, currentIndex);

        await setState({stack: newStack});
      }
    };
    return navigation;
  };

  const onPressBackButton = () => {
    if (Array.isArray(stack) && stack.length > 1) {
      const newStack = [...stack];
      newStack.pop();
      setState({stack: newStack});
      return true;
    }
    return false;
  };

  useBackHandler(onPressBackButton);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {Array.isArray(stack)
        ? stack.map((item, index: number) => {
            const {screenKey, params} = item;
            const screenIndex = index;
            const {screen} = screens[screenKey];
            const navigation = getNavigation(screenIndex);
            return (
              <ScreenItem
                key={`stack-${screenIndex}${uniqueId}`}
                screen={screen}
                screenIndex={screenIndex}
                screenKey={screenKey}
                navigation={navigation}
                params={params}
              />
            );
          })
        : void 0}
    </View>
  );
};

interface StackProps {
  screens: {
    [key: string]: {
      screen: React.ReactNode | any;
    };
  };
  initialRoute?: string;
}

const createStackNavigator = (props: StackProps) => {
  let {screens, initialRoute} = props;

  initialRoute = initialRoute || Object.keys(screens)[0];

  return (props: any) => (
    <StackNavigator {...props} screens={screens} initialRoute={initialRoute} />
  );
};

export {createStackNavigator};
export type {StackProps, NavigationProps};
