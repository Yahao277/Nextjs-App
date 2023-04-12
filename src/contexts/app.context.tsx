import React, { createContext, useContext } from 'react';

export type AppContextType = {
  project: string;
  setProject: React.Dispatch<React.SetStateAction<string>>;
};

// Context
export const AppContext = createContext<AppContextType | null>(null);

// Provider
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [project, setProject] = React.useState('Not Selected');

  // ComponentDidMouunt
  React.useEffect(() => {}, []);

  //
  const values = React.useMemo(
    () => ({
      project, // States que seran visibles en el contexto.
      setProject, // Funciones que son exportadas para manejo externo.
    }),
    [project]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context as AppContextType;
}

export default useAppContext;
