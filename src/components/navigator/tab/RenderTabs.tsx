import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import useUniqueId from '../../../hooks/useUniqueId';
import COLORS from '../../../theme/colors';
import TextView from '../../text-view';
import {NavigationProps} from '../stack';

interface Props {
  changeTab: any;
  screens: any;
  activeTab: string;
}

const RenderTabs: React.FC<Props> = ({changeTab, screens, activeTab}) => {
  const screenObjs = Object.values(screens);
  const screenKeys = Object.keys(screens);
  const uniqueId = useUniqueId();
  return (
    <View style={{flexDirection: 'row'}}>
      {Array.isArray(screenObjs)
        ? screenObjs.map((item, index) => {
            const {title, icon: Icon} = item;
            const screenKey = screenKeys[index];
            const isActive = screenKey === activeTab;
            const onPress = () => {
              if (typeof changeTab === 'function') {
                changeTab(screenKey, index);
              }
            };
            return (
              <TouchableOpacity
                onPress={onPress}
                key={`tab-${index}${uniqueId}`}
                style={{flex: 1, alignItems: 'center', padding: 16}}>
                {Icon ? (
                  <Icon
                    fill={isActive ? COLORS.PURPLEPRIMARY : COLORS.GREYLIGHT}
                  />
                ) : (
                  void 0
                )}
                {title ? (
                  <TextView
                    color={isActive ? 'PURPLEPRIMARY' : 'GREYLIGHT'}>
                    {title}
                  </TextView>
                ) : (
                  void 0
                )}
              </TouchableOpacity>
            );
          })
        : void 0}
    </View>
  );
};

export default RenderTabs;
