import { useEffect, useState } from "react";
import Home from "@pages/Home";
import Register from "@pages/Register";
import ProgressBar from "@components/ProgressBar";
import "./App.css";

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 5000);
  }, []);

  return (
    <div className="App">
      <Home />
      <ProgressBar bgcolor={"#FFFFFF"} completed={completed} />
      <Register />
    </div>
  );
}

export default App;
