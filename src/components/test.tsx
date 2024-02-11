import { useCFBContext } from '../context/context-user';
import './test.css';

export const Test = () => {
    const { theme, setTheme } = useCFBContext();

    const onPress = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div>
            <p>{'Hey Maddie'}</p>
            <button onClick={onPress}>{'Toggle Pallete'}</button>
        </div>
    );
};
