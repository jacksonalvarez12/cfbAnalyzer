import { Test } from './components/test';
import { ContextProvider } from './context/context-provider';

export default function App() {
    return (
        <ContextProvider>
            <Test />
        </ContextProvider>
    );
}
