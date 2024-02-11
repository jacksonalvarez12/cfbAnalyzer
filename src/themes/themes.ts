import { ColorTheme, ThemeOptions } from './types';

const themes: ThemeOptions = {
    dark: {
        primary: '#325b97',
        secondary: '#9cafeb',
        font: '#e1e1ff',
        background: '#000013',
    },
    light: {
        primary: '#0d0b52',
        secondary: '#3458b9',
        font: '#424242',
        background: '#ffffff',
    },
};

export const setColorPallete = (theme: ColorTheme): void => {
    console.log('Setting color pallete', theme);
    document.documentElement.style.setProperty(
        '--primary-color',
        themes[theme].primary
    );
    document.documentElement.style.setProperty(
        '--secondary-color',
        themes[theme].secondary
    );
    document.documentElement.style.setProperty(
        '--font-color',
        themes[theme].font
    );
    console.log(`Setting backgorund color: ${themes[theme].background}`);
    console.log(
        `Curent Element style ${JSON.stringify(
            document.documentElement.style.getPropertyValue('--bg-color'),
            null,
            2
        )}`
    );
    document.documentElement.style.setProperty(
        '--bg-color',
        themes[theme].background
    );
    console.log(
        `Updated Element style ${JSON.stringify(
            document.documentElement.style.getPropertyValue('--bg-color'),
            null,
            2
        )}`
    );
};
