import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './slds/styles/salesforce-lightning-design-system.min.css';
import TabsPage1 from './pages/tabset1.js';
import TabsPage2 from './pages/tabset2.js';
import LayoutPage from "./pages/layout.js";
import HomePage from "./pages/home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="heading" element={<TabsPage1 />} />
          <Route path="nav" element={<TabsPage2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
