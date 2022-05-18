import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import {PrivacyPolicyHtml} from './data';
import Loader from '../../components/loader';
import {NavigationProps} from '../../components/navigator/stack';
import Header from '../../components/header';

interface Props {
  navigation: NavigationProps;
}

const PrivacyPolicy: React.FC<Props> = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Header onBackPress={onBackPress} title={`Privacy Policies`} />
      <WebView
        renderLoading={() => <Loader />}
        source={{html: PrivacyPolicyHtml}}
      />
    </View>
  );
};

export default PrivacyPolicy;
