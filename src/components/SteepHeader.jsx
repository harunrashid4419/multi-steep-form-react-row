import { useContext } from "react";
import { multiSteepContext } from "../SteepContext";
import { FaCheck } from "react-icons/fa";
import "./style.css";

const SteepHeader = () => {
  const { steep } = useContext(multiSteepContext);
  return (
    <div>
      <FaCheck className="icon" />
      steep: {steep}
    </div>
  );
};

export default SteepHeader;
