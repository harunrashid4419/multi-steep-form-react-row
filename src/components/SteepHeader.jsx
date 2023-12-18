import { useContext } from "react";
import { multiSteepContext } from "../SteepContext";
import { FaCheck } from "react-icons/fa";
import "./style.css";

const SteepHeader = () => {
  const { steep, finalData } = useContext(multiSteepContext);
  return (
    <div className="steep-heading">
      <div className="steeps">
        {steep != 1 ? (
          <FaCheck className="icon" />
        ) : (
          <h1 className="icon">1</h1>
        )}
        {steep === 3 ? (
          <FaCheck className="icon" />
        ) : (
          <h1 className="icon">2</h1>
        )}
        {finalData.length ? (
          <FaCheck className="icon" />
        ) : (
          <h1 className="icon">3</h1>
        )}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SteepHeader;
