import { ReactNode, useState } from 'react';
import { setColorPallete } from '../themes/themes';
import { ColorTheme } from '../themes/types';
import { CFBContext, defaultContext } from './context';
import { CFBContextType } from './types';

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<ColorTheme>(defaultContext.theme);
    const setTheme = (theme: ColorTheme) => {
        setThemeState(theme);
        setColorPallete(theme);
    };

    const context: CFBContextType = {
        theme,
        setTheme,
    };

    return (
        <CFBContext.Provider value={context}>{children}</CFBContext.Provider>
    );
};
