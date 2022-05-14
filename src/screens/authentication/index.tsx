import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {GoogleLogoIcon} from '../../assets/svg';
import Button, {GoogleLoginButton} from '../../components/button';
import Loader from '../../components/loader';
import {NavigationProps} from '../../components/navigator/stack';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import COLORS, {COLOR_NAMES} from '../../theme/colors';

const title = 'Welcome 👋';
const subTitle =
  'I am happy to see you again. You can continue where you left off by logging in';

interface Props {
  navigation: NavigationProps;
}

const Authentication: React.FC<Props> = ({navigation}) => {
  const {login, logout, isLoggedIn, isLoading} = useGoogleAuth();

  const goToHome = () => {
    navigation.replace('root');
  };

  useEffect(() => {
    if (isLoggedIn) {
      goToHome();
    } else {
      // logout()
    }
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <View>
        <TextView color="BLACKPRIMARY" style={styles.title}>
          {title}
        </TextView>
        <TextView color="GREYPRIMARY" style={styles.subTitle}>
          {subTitle}
        </TextView>
      </View>
      <Button label='Go To Home' onPress={goToHome} />
      <View>
        <GoogleLoginButton onPress={login} disabled={isLoading || isLoggedIn} />
      </View>
      {isLoading ? <Loader /> : void 0}
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'space-between'},
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
  subTitle: {fontSize: 16, lineHeight: 24, fontWeight: '400'},
});
