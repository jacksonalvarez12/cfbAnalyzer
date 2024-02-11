import { ColorTheme } from '../themes/types';

export type CFBContextType = {
    theme: ColorTheme;
    setTheme: (theme: ColorTheme) => void;
};
