import { createContext } from 'react';
import { langs } from './langs/langs';
import { themes } from './themes/themes';
import { CFBContextType } from './types';

export const CFBContext = createContext<CFBContextType | undefined>(undefined);

export const defaultContext: CFBContextType = {
    theme: 'dark',
    palette: themes.dark,
    setTheme: () => {},
    lang: 'en',
    copyDoc: langs.en,
    setLang: () => {},
};
