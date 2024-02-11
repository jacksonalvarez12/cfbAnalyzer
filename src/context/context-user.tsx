import { useContext } from 'react';
import { CFBContext } from './context';
import { CFBContextType } from './types';

// Custom react hook for accessing CFBContext
export const useCFBContext = (): CFBContextType => {
    const context: CFBContextType | undefined = useContext(CFBContext);
    if (!context) {
        throw Error('useCFBContext must be used within a CFBContextProvider');
    } else {
        return context;
    }
};
