import React from "react";
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import DropdownMenu from '../dropdownMenu/dropdownMenu.js';


const LayoutPage = () => {
    const tabLinkData = [
        { index: 0, id: '0_tab', title: 'heading', content: '', link: 'heading' },
        { index: 1, id: '1_tab', title: 'landmark', content: '', link: 'landmark' },
    ];
    return (
        <div>
            <nav className="bg-white pvm">
                <ul className="df df-baseline">
                    <li className="phm">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="phm">
                        <DropdownMenu 
                            label="tabset" 
                            useReactRouter={true} 
                            data={tabLinkData} />
                    </li>
                </ul>
            </nav>
            <main className="pam">
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutPage;
