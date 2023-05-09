import logo from './logo.svg';
import { HashRouter, Routes, Route } from "react-router-dom";
import './slds/styles/salesforce-lightning-design-system.min.css';
import TabsPage from './pages/tabset.js';
import ErrorMessaging from './pages/errorMessaging.js';
import MultipleErrorsPage from './pages/multipleErrorsPage.js';
import ModalPage from './pages/modalPage.js';
import LayoutPage from "./pages/layout.js";
import HomePage from "./pages/home.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="errorMessaging" element={<ErrorMessaging />} />
          <Route path="multipleErrors" element={<MultipleErrorsPage />} />
          <Route path="modal" element={<ModalPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
