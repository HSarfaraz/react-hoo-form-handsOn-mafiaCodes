import React from "react";
import "./App.css";
import ReactHookFormExample from "./withPlainReactHookForm/ReactHookFormExample";
import ReactHookFormWithZod from "./ReactHookFormWithZod/ReactHookFormWithZod";

function App() {
  return (
    <div className="App">
      {/* <ReactHookFormExample /> */}
      <ReactHookFormWithZod />
    </div>
  );
}

export default App;
