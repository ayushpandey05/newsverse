import {AppsIcon, BookmarkIcon, EstateIcon, UserIcon} from '../assets/svg';
import {createStackNavigator} from '../components/navigator/stack';
import {createTabNavigator} from '../components/navigator/tab';
import Authentication from '../screens/authentication';
import Bookmarks from '../screens/bookmarks';
import Browse from '../screens/browse';
import Categories from '../screens/categories';
import ChangePassword from '../screens/change-password';
import Home from '../screens/home';
import Language from '../screens/language';
import PrivacyPolicy from '../screens/privacy-policy';
import Profile from '../screens/profile';
import TermsConditions from '../screens/terms-conditions';
import TopHeadlines from '../screens/top-headlines';
import WebView from '../screens/webview';

const RootTabNavigator = createTabNavigator({
  screens: {
    browse: {
      screen: Browse,
      icon: EstateIcon,
    },
    // categories: {
    //   screen: Categories,
    //   icon: AppsIcon,
    // },
    // bookmarks: {
    //   screen: Bookmarks,
    //   icon: BookmarkIcon,
    // },
    profile: {
      screen: Profile,
      icon: UserIcon,
    },
  },
});

const MainNavigator = createStackNavigator({
  screens: {
    auththentication: {
      screen: Authentication,
    },
    root: {
      screen: RootTabNavigator,
    },
    language: {
      screen: Language,
    },
    changePassword: {
      screen: ChangePassword,
    },
    webview: {
      screen: WebView,
    },
    privacyPolicy: {
      screen: PrivacyPolicy,
    },
    termsConditions: {
      screen: TermsConditions,
    },
    topHeadlines: {
      screen: TopHeadlines
    }
  },
});

export default MainNavigator;
