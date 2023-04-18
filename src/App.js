import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './slds/styles/salesforce-lightning-design-system.min.css';
import TabsPage from './pages/tabset.js';
import LayoutPage from "./pages/layout.js";
import HomePage from "./pages/home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="tabset" element={<TabsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
