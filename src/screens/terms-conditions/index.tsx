import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import Header from '../../components/header';
import {NavigationProps} from '../../components/navigator/stack';
import {TermsConditionsHtml} from './data';

interface Props {
  navigation: NavigationProps;
}

const TermsConditions: React.FC<Props> = ({navigation}) => {
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Header onBackPress={onBackPress} title={`Terms & Conditions`} />
      <WebView source={{html: TermsConditionsHtml}} />
    </View>
  );
};

export default TermsConditions;
