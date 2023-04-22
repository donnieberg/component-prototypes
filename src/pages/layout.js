import React from "react";
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from '@salesforce/design-system-react';

const LayoutPage = () => {
    return (
        <div>
            <nav className="bg-white pvm">
                <ul className="df df-baseline">
                    <li className="phm">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="phm">
                        <Link to="/tabs">Tabs</Link>
                    </li>
                </ul>
                <Button
                    assistiveText={{ icon: 'Page Settings' }}
                    iconCategory="utility"
                    iconName="settings"
                    iconSize="medium"
                    iconVariant="bare"
                    variant="icon"
                />
            </nav>
            <main className="pam">
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutPage;

