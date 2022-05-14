import React from 'react';
import {View} from 'react-native';
import { SvgProps } from 'react-native-svg';
import useBackHandler from '../../../hooks/useBackHandler';
import useMultiState from '../../../hooks/useMultiState';
import useUniqueId from '../../../hooks/useUniqueId';
import {NavigationProps} from '../stack';
import RenderTabs from './RenderTabs';
import TabScreen from './TabScreen';

interface Props {
  screens: {
    [key: string]: {
      screen: React.ReactNode | any;
      title?: string;
      icon?: React.FC<SvgProps>
    };
  };
  initialRoute: string;
  firstRoute: string;
  navigation?: NavigationProps;
  params?: any;
}

const TabNavigator: React.FC<Props> = props => {
  const {firstRoute, initialRoute, screens, navigation, params} = props;

  const uniqueId = useUniqueId();
  const {state, setState} = useMultiState({
    tabStack: [initialRoute],
    activeTab: initialRoute,
  });
  const {tabStack, activeTab} = state;

  const changeTab = (screenKey: string, index: number) => {
    const tabIndex = Array.isArray(tabStack)
      ? tabStack.findIndex(item => item === screenKey)
      : -1;

    const newActiveTab = screenKey;
    const newTabStack = [...tabStack];

    if (tabIndex === -1) {
      newTabStack[tabStack?.length || 0] = screenKey;
    }

    setState({tabStack: newTabStack, activeTab: newActiveTab});
  };

  const onPressBackButton = () => {
    if (activeTab === firstRoute) {
      return false;
    }
    setState({activeTab: firstRoute})
    // changeTab(firstRoute, (tabStack.length - 1));
    return true;
  };

  useBackHandler(onPressBackButton);

  return (
    <View style={{flex: 1, backgroundColor: 'white', }}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {Array.isArray(tabStack)
          ? tabStack.map((item, index) => {
              const screenKey = item;
              const screenIndex = index;
              const {screen} = screens[screenKey];
              return (
                <TabScreen
                  key={`tab-screen-${screenIndex}${uniqueId}`}
                  screen={screen}
                  screenIndex={screenIndex}
                  screenKey={screenKey}
                  params={params}
                  visible={activeTab === screenKey}
                  navigation={navigation}
                />
              );
            })
          : void 0}
      </View>
      <RenderTabs activeTab={activeTab} changeTab={changeTab} screens={screens} />
    </View>
  );
};

interface TabProps {
  screens: {
    [key: string]: {
      screen: React.ReactNode | any;
      title?: string;
      icon?: React.FC<SvgProps>
    };
  };
  initialRoute?: string;
}

const createTabNavigator = (props: TabProps) => {
  let {screens, initialRoute} = props;
  initialRoute = initialRoute || Object.keys(screens)[0];

  return (props: any) => (
    <TabNavigator
      firstRoute={initialRoute}
      initialRoute={initialRoute}
      {...props}
      screens={screens}
    />
  );
};

export {createTabNavigator};
export type {TabProps};
