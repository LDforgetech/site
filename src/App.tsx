import { useState } from "react";
import Index from "./pages";

function App() {
  const [count] = useState(2);

  return (
    <div>
      <Index />
    </div>
  );
}

export default App;
