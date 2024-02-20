export type ColorTheme = 'light' | 'dark';

export type ColorPalette = {
    primary: string;
    primary_highlight: string;
    secondary: string;
    background: string;
};

export type ThemeOptions = {
    light: ColorPalette;
    dark: ColorPalette;
};
