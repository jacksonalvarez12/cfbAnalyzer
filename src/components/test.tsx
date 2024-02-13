import { useCFBContext } from '../context/context-user';
import { fonts } from '../styles/styles';

export const Test = () => {
    const { theme, setTheme, palette } = useCFBContext();

    const onPress = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div
            style={{
                backgroundColor: palette.background,
                height: '100vh',
            }}>
            <p style={{ ...fonts.body, color: palette.primary }}>
                {'Body style'}
            </p>
            <p style={{ ...fonts.heading, color: palette.primary }}>
                {'Heading style'}
            </p>
            <p style={{ ...fonts.subheading, color: palette.secondary }}>
                {'Subheading style'}
            </p>
            <button
                onClick={onPress}
                style={{
                    ...fonts.body,
                    color: palette.secondary,
                    backgroundColor: palette.background,
                    border: '1px solid',
                    borderColor: palette.primary,
                    inset: 0,
                }}>
                {'Toggle Pallete'}
            </button>
        </div>
    );
};
