import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";

const useGlobal = () => {
  const global = useContext(GlobalContext);

  return { ...global };
};

export default useGlobal;
