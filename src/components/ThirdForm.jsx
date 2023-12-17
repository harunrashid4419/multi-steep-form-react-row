import { useContext } from "react";
import { multiSteepContext } from "../SteepContext";
import "./style.css";

const ThirdForm = () => {
  const { setData, data, setSteep, submitData } = useContext(multiSteepContext);
  return (
    <div className="steep">
      <input
        type="text"
        name="village"
        id=""
        required
        value={data.village}
        onChange={(e) => setData({ ...data, village: e.target.value })}
        placeholder="Village"
      />
      <input
        type="text"
        name="district"
        id=""
        required
        value={data.district}
        onChange={(e) => setData({ ...data, district: e.target.value })}
        placeholder="District"
      />
      <input
        type="text"
        name="division"
        id=""
        required
        value={data.division}
        onChange={(e) => setData({ ...data, division: e.target.value })}
        placeholder="Division"
      />
      <div className="btn">
        <button onClick={submitData}>Submit</button>
        <button onClick={() => setSteep(2)}>Back</button>
      </div>
    </div>
  );
};

export default ThirdForm;
