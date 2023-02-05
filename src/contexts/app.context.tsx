import React, { useContext, createContext } from 'react';

export type AppContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

//Context
export const AppContext = createContext<AppContextType|null>(null);

//Provider
export const AppContextProvider = ({ children }: { children:React.ReactNode}) => {
  const [counter, setCounter] = React.useState(0);

  //ComponentDidMouunt
  React.useEffect(() => {

  }, []);

  //
  const values = React.useMemo(() => (
    { counter,      // States que seran visibles en el contexto.
      setCounter,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      counter ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context as AppContextType;
}

export default useAppContext;