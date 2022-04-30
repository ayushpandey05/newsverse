import {EffectCallback, useEffect} from 'react';

const useDidMount = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export default useDidMount;
