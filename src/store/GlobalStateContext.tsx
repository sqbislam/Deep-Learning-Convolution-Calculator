'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';
interface GlobalContextType {
  input?: any;
  setInput?: (input: any) => void;
  architecture?: any;
  setArchitecture?: (architecture: any) => void;
  output?: any;
  setOutput?: (output: any) => void;
}

const GlobalStateContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = (): GlobalContextType => {
  // 2. use the useContext hook
  const context = useContext(GlobalStateContext);

  // 3. Make sure it's not null!
  if (!context) {
    throw new Error('Please use ContextProvider in parent component');
  }

  return context;
};

export const GlobalStateProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [input, setInput] = useState('system');
  const [architecture, setArchitecture] = useState('system');
  const [output, setOutput] = useState('system');
  return (
    <GlobalStateContext.Provider
      value={{
        input,
        setInput,
        architecture,
        setArchitecture,
        output,
        setOutput,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
