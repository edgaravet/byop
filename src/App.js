import React from "react";
import Step1 from "./components/Step1";
import CompatibleNetwork from "./components/CompatibleNetwork";
import ImeiCheck from "./components/ImeiCheck";
import ImeiInfoModal from "./components/Modals/ImeiInfoModal";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Result from "./components/Result";
function App() {
  return (
    <div className="App">
    <Step1/>
    <CompatibleNetwork/>
    <ImeiCheck/>
    <ImeiInfoModal/>
    <Step2/>
    <Step3/>
    <Step4/>
    <Result/>
    </div>
  );
}

export default App;
