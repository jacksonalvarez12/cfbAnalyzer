import { useEffect } from 'react';
import './App.css';
import { Test } from './components/test';
import { defaultContext } from './context/context';
import { ContextProvider } from './context/context-provider';
import { setColorPallete } from './themes/themes';

export default function App() {
    useEffect(() => setColorPallete(defaultContext.theme), []);

    return (
        <ContextProvider>
            <Test />
        </ContextProvider>
    );
}
