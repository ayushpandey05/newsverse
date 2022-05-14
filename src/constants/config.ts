import {Platform} from 'react-native';

const API_KEY = '227393da84a5464997005fe472cf7c75';
let BASE_URL = 'https://newsapi.org/v2/';

if (Platform.OS === 'android') {
  BASE_URL = BASE_URL.replace('https', 'http');
}

export {API_KEY, BASE_URL};
