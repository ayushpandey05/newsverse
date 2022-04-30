import {AppsIcon, BookmarkIcon, EstateIcon, UserIcon} from '../assets/svg';
import {createStackNavigator} from '../components/navigator/stack';
import {createTabNavigator} from '../components/navigator/tab';
import Bookmarks from '../screens/bookmarks';
import Browse from '../screens/browse';
import Categories from '../screens/categories';
import ChangePassword from '../screens/change-password';
import Home from '../screens/home';
import Language from '../screens/language';
import Profile from '../screens/profile';
import TermsNConditions from '../screens/terms-n-conditions';
import WebView from '../screens/webview';

const RootTabNavigator = createTabNavigator({
  screens: {
    browse: {
      screen: Browse,
      icon: EstateIcon,
    },
    categories: {
      screen: Categories,
      icon: AppsIcon,
    },
    bookmarks: {
      screen: Bookmarks,
      icon: BookmarkIcon,
    },
    profile: {
      screen: Profile,
      icon: UserIcon,
    },
  },
});

const MainNavigator = createStackNavigator({
  screens: {
    root: {
      screen: RootTabNavigator,
    },
    language: {
      screen: Language,
    },
    changePassword: {
      screen: ChangePassword,
    },
    termsNConditions: {
      screen: TermsNConditions,
    },
    webview: {
      screen: WebView,
    },
  },
});

export default MainNavigator;
