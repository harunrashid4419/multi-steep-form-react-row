import { useState } from "react";
import { createContext } from "react";
import App from "./App";

export const multiSteepContext = createContext();

const SteepContext = () => {
  const [steep, setSteep] = useState(1);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData((finalData) => [...finalData, data]);
    setData("");
  };
  return (
    <multiSteepContext.Provider
      value={{
        steep,
        setSteep,
        data,
        setData,
        finalData,
        setFinalData,
        submitData,
      }}
    >
      <App />
    </multiSteepContext.Provider>
  );
};

export default SteepContext;
