import { createContext } from 'react';
import { themes } from '../themes/themes';
import { CFBContextType } from './types';

export const CFBContext = createContext<CFBContextType | undefined>(undefined);

export const defaultContext: CFBContextType = {
    theme: 'dark',
    palette: themes.dark,
    setTheme: () => {},
};
