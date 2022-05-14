import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import {PrivacyPolicyHtml} from './data';
import Loader from '../../components/loader';

const PrivacyPolicy = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        renderLoading={() => <Loader />}
        source={{html: PrivacyPolicyHtml}}
      />
    </View>
  );
};

export default PrivacyPolicy;
