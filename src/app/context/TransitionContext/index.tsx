"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FunctionComponent,
} from "react";

interface TransitionContextType {
  startTransition: () => Promise<void>;
  endTransition: () => void;
  isTransitioning: boolean;
}

const defaultValues: TransitionContextType = {
  startTransition: () => Promise.resolve(),
  endTransition: () => {},
  isTransitioning: false,
};

interface TransitionProviderProps {
  children: ReactNode;
}

// Create a context
const TransitionContext = createContext<TransitionContextType>(defaultValues);

// Provider component that wraps your application
export function TransitionProvider({ children }: TransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (): Promise<void> => {
    setIsTransitioning(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 850); // Duration of the transition animation
    });
  };

  const endTransition = (): void => {
    setIsTransitioning(false);
  };

  return (
    <TransitionContext.Provider
      value={{ startTransition, endTransition, isTransitioning }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

// Custom hook to use the context
export const useTransition = (): TransitionContextType =>
  useContext(TransitionContext);
