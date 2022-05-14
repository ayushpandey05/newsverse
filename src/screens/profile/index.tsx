import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NavigationProps} from '../../components/navigator/stack';
import TextView from '../../components/text-view';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import {GoogleLoginButton} from '../../components/button';
import ButtonWithIcon from './ButtonWithIcon';
import {RightAngleIcon, SignoutIcon} from '../../assets/svg';
import Avatar from '../../components/avatar';

interface Props {
  navigation: NavigationProps;
}

const renderProfile = (user?: any) => {
  const {photoURL, displayName = 'Guest', email} = user || {};
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 32}}>
      <Avatar image={{uri: photoURL}} name={displayName} />
      <View style={{marginLeft: 24}}>
        <TextView
          color="BLACKPRIMARY"
          style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>
          {displayName}
        </TextView>
        {email && (
          <TextView
            color="GREYPRIMARY"
            style={{fontSize: 14, lineHeight: 24, fontWeight: '400'}}>
            {email}
          </TextView>
        )}
      </View>
    </View>
  );
};

const Profile: React.FC<Props> = ({navigation}) => {
  const {login, logout, isLoading, isLoggedIn, user} = useGoogleAuth();

  const goToPrivacyPolicy = () => {
    navigation.push('privacyPolicy');
  };

  const goToTermsConditions = () => {
    navigation.push('termsConditions');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <TextView color="BLACKPRIMARY" style={styles.heading}>
        Profile
      </TextView>
      {renderProfile(user)}
      <ButtonWithIcon label="Language" icon={RightAngleIcon} />
      <View style={styles.br} />
      <ButtonWithIcon
        onPress={goToPrivacyPolicy}
        label="Privacy"
        icon={RightAngleIcon}
      />
      <View style={styles.br} />
      <ButtonWithIcon
        onPress={goToTermsConditions}
        label={`Terms & Conditions`}
        icon={RightAngleIcon}
      />
      <View style={styles.br} />
      {isLoggedIn ? (
        <ButtonWithIcon
          disabled={isLoading}
          onPress={logout}
          label="Sign Out"
          icon={SignoutIcon}
        />
      ) : (
        <GoogleLoginButton disabled={isLoading} onPress={login} />
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  br: {height: 16},
  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    marginBottom: 32,
  },
});
