import {useState, useEffect} from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// Persisted state by saving to local storage
export function usePersistedState(key: string, defaultValue: string | number) {
  const tmp = localStorage.getItem(key)
  const [state, setState] = useState(
    () => tmp ? JSON.parse(tmp) : defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector