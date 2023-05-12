import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DndKitTable from "./DndKitTable";
import Example from "./Example";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Example /> */}
      <DndKitTable />
    </>
  );
}

export default App;
