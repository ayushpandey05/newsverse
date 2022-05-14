import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import {TermsConditionsHtml} from './data';

const TermsConditions = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{html: TermsConditionsHtml}} />
    </View>
  );
};

export default TermsConditions;
