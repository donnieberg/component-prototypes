import logo from './logo.svg';
import { HashRouter, Routes, Route } from "react-router-dom";
import './slds/styles/salesforce-lightning-design-system.min.css';
import RecordHomePage from './pages/recordHome.js';
import ErrorMessaging from './pages/errorMessaging.js';
import MultipleErrorsPage from './pages/multipleErrorsPage.js';
import LayoutPage from "./pages/layout.js";
import HomePage from "./pages/home.js";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    {/* 
                    <Route index element={<HomePage />} />
                    <Route path="recordHome" element={<RecordHomePage />} />
                    <Route path="errorMessaging" element={<ErrorMessaging />} />
                    <Route path="multipleErrors" element={<MultipleErrorsPage />} />
                    */}
                    <Route index element={<RecordHomePage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
