import { createContext } from 'react';
import { CFBContextType } from './types';

export const CFBContext = createContext<CFBContextType | undefined>(undefined);

export const defaultContext: CFBContextType = {
    theme: 'dark',
    setTheme: () => {},
};
