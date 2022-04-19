import { createContext, FC, useState } from "react";
import { TraceSpeed } from "services/Tracer";

type GlobalContextType = {
  listSize: number;
  setListSize: (value: number) => void;
  speed: TraceSpeed;
  setSpeed: (value: TraceSpeed) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  listSize: 10,
  setListSize: () => [],
  speed: TraceSpeed.NORMAL,
  setSpeed: () => [],
});

const DEFAULT_SIZE = 15

const GlobalContextProvider: FC = ({ children }) => {
  const [listSize, setListSize] = useState(DEFAULT_SIZE);
  const [speed, setSpeed] = useState<TraceSpeed>(TraceSpeed.NORMAL);

  return (
    <GlobalContext.Provider value={{ listSize, setListSize, speed, setSpeed }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
