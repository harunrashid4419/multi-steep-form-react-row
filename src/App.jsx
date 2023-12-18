import { useContext } from "react";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import { multiSteepContext } from "./SteepContext";
import SteepHeader from "./components/SteepHeader";

function App() {
  const { steep } = useContext(multiSteepContext);
  const showSteep = (stp) => {
    switch (stp) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      case 3:
        return <ThirdForm />;
    }
  };
  console.log(steep)
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>MultiSteep form</h1>
      <SteepHeader />
      {showSteep(steep)}
    </div>
  );
}

export default App;
