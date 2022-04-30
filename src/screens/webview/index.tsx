import React, {useEffect, useRef, useState} from 'react';
import {BackHandler, ActivityIndicator, View, StyleSheet, Platform} from 'react-native';
import WebViewComponent from 'react-native-webview';
import Loader from '../../components/loader';
import {NavigationProps} from '../../components/navigator/stack';
import Progress from '../../components/progress';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';
import useBackHandler from '../../hooks/useBackHandler';
import Header from './Header';

interface Props {
  params: {
    uri: string;
  };
  navigation: NavigationProps;
}

const WebView: React.FC<Props> = ({params: {uri}, navigation}) => {

  const [uriDetail, setUriDetail] = useState({url: uri, title: ''})
  const [progress, setProgress]=useState(0)

  const canGoBack: any = useRef()

  const webview = useRef<WebViewComponent>(null);
  const onAndroidBackPress = (): boolean => {
    // return true
    if (canGoBack.current && webview.current) {
      console.log('can go back');
      webview.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    console.log('cannot go back');
    unMountThisScreen()
    return true;
  };

  
  const unMountThisScreen = () => {
    // if(webview.current){
    //   webview.current.goBack()
    // }else{}
    navigation.goBack();
  };
  
  const handleMessage = (message: any) => {
    // console.log(message.nativeEvent.data);
  };
  
  useBackHandler(onAndroidBackPress);
  return (
    <View style={styles.container}>
      <Header closeView={onAndroidBackPress} {...uriDetail} />
      <Progress progress={progress} />
      <View style={styles.webviewContainer}>
        <WebViewComponent
        onNavigationStateChange={(navState)=>{
          setUriDetail({...uriDetail, url: navState.url})
          if(navState.canGoBack){
            canGoBack.current = true
            return true
          }else{
            canGoBack.current = false
            return false
          }
        }}
          startInLoadingState
          renderLoading={() => <Loader />}
          source={{uri}}
          ref={webview}
          injectedJavaScript="window.postMessage(document.title)"
          onMessage={handleMessage}
          allowsBackForwardNavigationGestures
          onLoadProgress={(e)=>{
            if(e.nativeEvent.progress === 1){
              setUriDetail({...uriDetail, title: e.nativeEvent.title})
            }
            setProgress(e.nativeEvent.progress)
          }}
        />
      </View>
    </View>
  );
};

export default WebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
});
