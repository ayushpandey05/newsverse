import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';

interface Props {
  [key: string]: any;
}

const storage = new MMKVStorage.Loader().initialize();
const useMultiStore = (initialize: Props) => {
  const [multiStore, setMultiStore]: any = useMMKVStorage('mmkv-store', storage, {
    ...initialize,
  });

  const store = multiStore;
  const setStore = (newState: Props) => {
    setMultiStore({...multiStore, ...newState});
  };

  return {store, setStore};
};

export default useMultiStore;
