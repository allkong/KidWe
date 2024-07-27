import React, {createContext, useCallback, useContext, useState} from 'react';

interface HeaderContextProviderProps {
  headerTitle: string;
  handleHeaderTitle: (value: string) => void;
}

interface HeaderProviderProps {
  children: React.ReactNode;
}

const HeaderContext = createContext<HeaderContextProviderProps | undefined>(
  undefined
);

export const HeaderProvider = ({children}: HeaderProviderProps) => {
  const [headerTitle, setHeaderTitle] = useState<string>('');

  const handleHeaderTitle = useCallback(
    (value: string) => setHeaderTitle(value),
    []
  );
  return (
    <HeaderContext.Provider value={{headerTitle, handleHeaderTitle}}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader는 HeaderProvider와 함께 사용되어야 합니다.');
  }
  return context;
};
