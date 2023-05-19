import { useState, useRef } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from '@salesforce/design-system-react';

const LayoutPage = ({ currentUrl }) => {
    let [asideOpen, setAsideOpen] = useState(false);

    const handleSettingsClick = () => {
        setAsideOpen(asideOpen = !asideOpen);
    };

    return (
        <div>
            <nav className="bg-white pvs df df-end">
                <Button
                    assistiveText={{ icon: 'Page Settings' }}
                    className="mhm"
                    iconCategory="utility"
                    iconName="settings"
                    iconSize="medium"
                    iconVariant="bare"
                    onClick={handleSettingsClick}
                    variant="icon"
                />
            </nav>
            <main>
                <Outlet context={[asideOpen, handleSettingsClick, currentUrl]} />
            </main>
        </div>
    );
};

export default LayoutPage;

