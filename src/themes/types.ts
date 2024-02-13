export type ColorTheme = 'light' | 'dark';

export type ColorPalette = {
    primary: string;
    secondary: string;
    background: string;
};

export type ThemeOptions = {
    light: ColorPalette;
    dark: ColorPalette;
};
