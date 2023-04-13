import { useState } from "react";
import { Home } from "./pages/Home";
import { UserForm } from "./pages/UserForm";
import "./styles/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <Home />
      <UserForm />
    </div>
  );
}

export default App;
