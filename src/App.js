import React from "react";
import Step1 from "./components/Step1";
import CompatibleNetwork from "./components/CompatibleNetwork";
import ImeiCheck from "./components/ImeiCheck";
import ImeiInfoModal from "./components/Modals/ImeiInfoModal";
import Step2 from "./components/Step2";
function App() {
  return (
    <div className="App">
    <Step1/>
    <CompatibleNetwork/>
    <ImeiCheck/>
    <ImeiInfoModal/>
    <Step2/>
    </div>
  );
}

export default App;
