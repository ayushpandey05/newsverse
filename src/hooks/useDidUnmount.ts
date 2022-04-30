import {EffectCallback, useEffect} from 'react';

const useDidUnmount = (effect: EffectCallback) => {
  useEffect(() => {
    const runAtUnmount = () => {
      if (typeof effect === 'function') {
        effect();
      }
    };
    return runAtUnmount;
  }, []);
};

export default useDidUnmount;
