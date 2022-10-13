import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/misc/navbar/index.tsx";
import Home from "./screens/home/index.tsx";

function App() {
  useEffect(() => {
    console.log("me monto");
    return () => {
      console.log("me desmonto");
    };
  });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
