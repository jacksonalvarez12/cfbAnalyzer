/* eslint-disable no-unused-vars */
import { ColorPalette, ColorTheme } from '../themes/types';

export type CFBContextType = {
    theme: ColorTheme;
    palette: ColorPalette;
    setTheme: (theme: ColorTheme) => void;
};
