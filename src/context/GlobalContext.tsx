import { createContext, FC, useState } from "react";

type GlobalContextType = {
  listSize: number;
  setListSize: (value: number) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  listSize: 10,
  setListSize: () => [],
});

const GlobalContextProvider: FC = ({ children }) => {
  const [listSize, setListSize] = useState(10);

  return (
    <GlobalContext.Provider value={{ listSize, setListSize }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
