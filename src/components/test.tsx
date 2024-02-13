import { useCFBContext } from '../context/context-user';
import { fonts } from '../styles/styles';

export const Test = () => {
    const { theme, setTheme, palette } = useCFBContext();

    const onPress = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div style={{ backgroundColor: palette.background }}>
            <p style={{ ...fonts.body, color: palette.primary }}>
                {'Hey Maddie'}
            </p>
            <button
                onClick={onPress}
                style={{ ...fonts.body, color: palette.secondary }}
            >
                {'Toggle Pallete'}
            </button>
        </div>
    );
};
