import React, {useState} from 'react';
import {SafeAreaView, useWindowDimensions, View} from 'react-native';
import useStatusBar from '../../hooks/useStatusBar';

const ContainerView: React.FC = ({children}) => {
  const {width, height} = useWindowDimensions();
  const {StatusBarHeight} = useStatusBar();
  const [viewStyle, setViewStyle] = useState({});
  return <SafeAreaView removeClippedSubviews style={{position: 'absolute', width: '100%', height: '100%'}} >
      <View style={{position: 'absolute', top: 0, bottom: 0, left: 0,right: 0}} >
          {children}
      </View>
  </SafeAreaView>
  return (
    <View
      onLayout={e => {
        const {height: viewHeight, width: viewWidth} = e.nativeEvent.layout;
        const styleCalc = {
          height: viewHeight + StatusBarHeight,
          top: -44,
          width,
          position: 'absolute',
        };
        setViewStyle(styleCalc);
      }}
      style={{flex: 1}}>
      <View style={viewStyle}>{children}</View>
    </View>
  );
};

export default ContainerView;
