<<<<<<< HEAD
import { useEffect, useState } from "react";
import Home from "@pages/Home";
import Register from "@pages/Register";
import ProgressBar from "@components/ProgressBar";
=======
>>>>>>> 506e1610805366dcc1f1ac6dfef0a776f0a9f14f
import "./App.css";
import Body from "./pages/Body";

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 5000);
  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
      <Home />
      <ProgressBar bgcolor={"#FFFFFF"} completed={completed} />
      <Register />
=======
      <Body />
>>>>>>> 506e1610805366dcc1f1ac6dfef0a776f0a9f14f
    </div>
  );
}

export default App;
