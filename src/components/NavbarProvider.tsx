import React, { createContext, useContext, ReactNode } from 'react';

interface NavBarProviderProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}

interface NavBarContextType {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const useNavBarContext = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavBarContext must be used within a NavBarProvider');
  }
  return context;
};

export const NavBarProvider = ({ setValue, children }: NavBarProviderProps) => {
  return (
    <NavBarContext.Provider value={{ setValue }}>
      {children}
    </NavBarContext.Provider>
  );
};
