import {useState} from 'react';

interface Props {
  [key: string]: any;
}

const useMultiState = (initialState: Props) => {
  const [multiState, setMultiState] = useState({...initialState});

  const state = multiState;
  const setState = async (newState: Props) => {
    await setMultiState({...multiState, ...newState});
  };

  return {state, setState};
};

export default useMultiState;
