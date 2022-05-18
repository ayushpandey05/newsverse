import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';

let storage = new MMKVStorage.Loader()
  .withEncryption()
  .withInstanceID('userId')
  .initialize();

const initializeStorage = (userId: string) => {
  storage = new MMKVStorage.Loader()
    .withEncryption()
    .withInstanceID(userId)
    .initialize();
};

const getStorage = () => {
  return storage;
};

const []=useMMKVStorage('data', storage, {})

export {initializeStorage};
export default getStorage;
