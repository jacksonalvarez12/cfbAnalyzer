/* eslint-disable no-unused-vars */
import { CopyDoc, Lang } from './langs/types';
import { ColorPalette, ColorTheme } from './themes/types';

export type CFBContextType = {
    theme: ColorTheme;
    palette: ColorPalette;
    setTheme: (theme: ColorTheme) => void;
    lang: Lang;
    copyDoc: CopyDoc;
    setLang: (lang: Lang) => void;
};
