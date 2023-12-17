import { useContext } from "react";
import { multiSteepContext } from "../SteepContext";
import "./style.css";

const SecondForm = () => {
  const { setData, data, setSteep } = useContext(multiSteepContext);
  return (
    <div className="steep">
      <input
        type="text"
        name="collage"
        id=""
        required
        value={data.collage}
        onChange={(e) => setData({ ...data, collage: e.target.value })}
        placeholder="Collage"
      />
      <input
        type="text"
        name="department"
        id=""
        required
        value={data.department}
        onChange={(e) => setData({ ...data, department: e.target.value })}
        placeholder="Location"
      />
      <input
        type="text"
        name="location"
        id=""
        required
        value={data.location}
        onChange={(e) => setData({ ...data, location: e.target.value })}
        placeholder="Location"
      />
      <div className="btn">
        <button onClick={() => setSteep(3)}>Next</button>
        <button onClick={() => setSteep(1)}>Back</button>
      </div>
    </div>
  );
};

export default SecondForm;
