import { useState, useRef } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from '@salesforce/design-system-react';

const LayoutPage = () => {
    let [asideOpen, setAsideOpen] = useState(false);

    const handleSettingsClick = () => {
        setAsideOpen(asideOpen = !asideOpen);
    };

    return (
        <div>
            <nav className="bg-white pvm df">
                <ul className="df df-baseline">
                    <li className="phm">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="phm">
                        <Link to="/tabs">Tabs</Link>
                    </li>
                    <li className="phm">
                        <Link to="/multipleErrors">Inputs with multiple errors</Link>
                    </li>
                    <li className="phm">
                        <Link to="/errorMessaging">Error Messaging</Link>
                    </li>
                    <li className="phm">
                        <Link to="/modal">Modal</Link>
                    </li>
                </ul>
                <Button
                    assistiveText={{ icon: 'Page Settings' }}
                    iconCategory="utility"
                    iconName="settings"
                    iconSize="medium"
                    iconVariant="bare"
                    onClick={handleSettingsClick}
                    variant="icon"
                />
            </nav>
            <main>
                <Outlet context={[asideOpen, handleSettingsClick]} />
            </main>
        </div>
    );
};

export default LayoutPage;

