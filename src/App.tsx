import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "@/pages";
import NotFound from "@/pages/not-found";
import DemoOne from "@/components/demo-onde";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
