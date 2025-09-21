import { createContext, useState, useContext, useMemo, useCallback } from 'react';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  const value = useMemo(() => ({
    isLoading,
    showLoader,
    hideLoader,
  }), [isLoading, showLoader, hideLoader]);

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  return useContext(LoadingContext);
};
