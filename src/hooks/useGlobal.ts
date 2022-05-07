import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";

const useGlobal = () => {
  const global = useContext(GlobalContext);

  if (global == null) {
    throw new Error("useGlobal can only be used in GlobalContextProvider");
  }

  return { ...global };
};

export default useGlobal;
