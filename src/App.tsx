import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Home } from "./pages/Home";
import { UserForm } from "./pages/UserForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <UserForm />
    </div>
  );
}

export default App;
