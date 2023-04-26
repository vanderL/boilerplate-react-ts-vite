import { ReactNode } from 'react';
import { AuthProvider } from './authStore';
import { ExampleProvider } from './counterStore';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ExampleProvider>{children}</ExampleProvider>
    </AuthProvider>
  );
}

