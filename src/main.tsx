import React from 'react';
import ReactDOM from 'react-dom/client';
import { Test } from './components/test';
import { ContextProvider } from './context/context-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider>
            <Test />
        </ContextProvider>
    </React.StrictMode>
);
