import React from 'react';
import {View} from 'react-native';
import {NavigationProps} from '../../components/navigator/stack';
import TextView from '../../components/text-view';
import Touch from '../../components/touch';
import COLORS from '../../theme/colors';

interface Props {
  navigation: NavigationProps;
}

const Button = ({onPress, title}: any) => {
  return (
    <Touch
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.PURPLEPRIMARY,
        margin: 8,
        borderRadius: 8
      }}
      onPress={onPress}>
      <TextView color="PURPLEPRIMARY">{title}</TextView>
    </Touch>
  );
};

const Profile: React.FC<Props> = ({navigation}) => {
  const goToLanguage = () => {
    navigation.push('language');
  };

  const goToChangePassword = () => {
    navigation.push('changePassword');
  };

  const goToTnC = () => {
    navigation.push('termsNConditions');
  };

  return (
    <View style={{flex: 1}}>
      <TextView color="BLACKDARKER">Profile Screen</TextView>
      <Button onPress={goToLanguage} title="Go to language" />
      <Button onPress={goToChangePassword} title="Go to change password" />
      <Button onPress={goToTnC} title={'Go to terms & conditions'} />
    </View>
  );
};

export default Profile;
