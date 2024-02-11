import { ReactNode } from 'react';

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
