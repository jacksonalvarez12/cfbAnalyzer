import { ReactNode, useMemo, useState } from 'react';
import { CFBContext, defaultContext } from './context';
import { langs } from './langs/langs';
import { CopyDoc, Lang } from './langs/types';
import { themes } from './themes/themes';
import { ColorPalette, ColorTheme } from './themes/types';
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

    // Language logic
    const [lang, setLangState] = useState<Lang>(defaultContext.lang);

    const copyDoc: CopyDoc = useMemo(() => {
        return langs[lang];
    }, [lang]);

    const setLang = (lang: Lang) => {
        setLangState(lang);
    };

    const context: CFBContextType = {
        theme,
        palette,
        setTheme,
        lang,
        copyDoc,
        setLang,
    };
    return (
        <CFBContext.Provider value={context}>{children}</CFBContext.Provider>
    );
};
