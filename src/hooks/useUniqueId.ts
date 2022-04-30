import {useMemo, useRef} from 'react';
import createUniqueId from '../utils/createUniqueId';

const useUniqueId = () => {
  const idRef: any = useRef();
  if (!idRef.current) {
    idRef.current = createUniqueId();
  }

  const uniqueId: string = useMemo(() => {
    return idRef.current;
  }, [idRef.current]);

  return uniqueId;
};

export default useUniqueId;
