export type ColorTheme = 'light' | 'dark';

export type ColorPallete = {
    primary: string;
    secondary: string;
    font: string;
    background: string;
};

export type ThemeOptions = {
    light: ColorPallete;
    dark: ColorPallete;
};
