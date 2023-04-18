import classNames from 'classnames';
import { useState } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";

function DropdownMenu({ data, useReactRouter, label }) {
    let [open, setOpen] = useState(false);

    const menuItems = data.map(item => 
        <li key={item.id} className="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabIndex="-1">
                <span className="slds-truncate">{item.title}</span>
            </a>
        </li>
    );

    const navItems = data.map(item => 
        <li key={item.id} className="slds-dropdown__item" role="presentation">
            <Link to={`/${item.link}`}>{item.title}</Link>
        </li>
    );

    const toggleMenu = () => {
        setOpen(open = !open)
    };

    return (
        <div className={classNames("slds-dropdown-trigger slds-dropdown-trigger_click", {"slds-is-open": open})}>
            <button className="slds-button" aria-haspopup="true" onClick={toggleMenu}>{label}</button>
            <div className="slds-dropdown slds-dropdown_left">
                <ul className="slds-dropdown__list slds-dropdown_length-with-icon-10" role="menu">
                    { useReactRouter ? navItems : menuItems }
                </ul>
            </div>
        </div>
    );
}

export default DropdownMenu;
