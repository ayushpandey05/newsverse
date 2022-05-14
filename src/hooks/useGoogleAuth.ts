import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const webClientId = '314652281679-b5hk113c6f29e80gtim15gqv851o9rmg';

GoogleSignin.configure({
  webClientId,
});

const useGoogleAuth = () => {
  const [state, setState]: any = useState({});

  const authState = state;

  const setAuthState = async (newState: any) => {
    await setState({...authState, ...newState});
  };

  const {isLoading, user} = authState || {};
  const isLoggedIn = user ? true : false;

  const login = async () => {
    try {
      await setAuthState({isLoading: true});
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      //   await setAuthState({isLoading: false});
    } catch (err) {
        console.log('@@error!>>>', err)
      await setAuthState({isLoading: false});
    }
  };

  const logout = async () => {
    try {
      await setAuthState({isLoading: true});
      await GoogleSignin.signOut();
      await auth().signOut();
      //   await setAuthState({isLoading: false});
    } catch (err) {
      await setAuthState({isLoading: false});
    }
  };

  const onAuthStateChanged = async (newUser: any) => {
    // setUser(newUser);
    await setAuthState({user: newUser, isLoading: false});
    // if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return {login, logout, isLoading, isLoggedIn, user};
};

export default useGoogleAuth;
