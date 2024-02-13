import { ReactNode, useMemo, useState } from 'react';
import { themes } from '../themes/themes';
import { ColorPalette, ColorTheme } from '../themes/types';
import { CFBContext, defaultContext } from './context';
import { CFBContextType } from './types';

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    // Color palette logic
    const [theme, setThemeState] = useState<ColorTheme>(defaultContext.theme);

    const palette: ColorPalette = useMemo(() => {
        return themes[theme];
    }, [theme]);

    const setTheme = (theme: ColorTheme) => {
        setThemeState(theme);
    };

    const context: CFBContextType = {
        theme,
        palette,
        setTheme,
    };
    return (
        <CFBContext.Provider value={context}>{children}</CFBContext.Provider>
    );
};
