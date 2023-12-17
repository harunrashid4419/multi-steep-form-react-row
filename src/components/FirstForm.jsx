import { useContext } from "react";
import { multiSteepContext } from "../SteepContext";
import "./style.css";

const FirstForm = () => {
  const { setData, data, setSteep } = useContext(multiSteepContext);
  return (
    <div className="steep">
      <input
        type="text"
        name="name"
        id=""
        required
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        id=""
        required
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder="email"
      />
      <input
        type="number"
        name="phone"
        id=""
        required
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        placeholder="Phone Number"
      />
      <button onClick={() => setSteep(2)}>Next</button>
    </div>
  );
};

export default FirstForm;
