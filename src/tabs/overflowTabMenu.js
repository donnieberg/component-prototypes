import classNames from 'classnames';
import { useState } from 'react';

function OverflowTabMenu() {
    let [open, setOpen] = useState(false);

    const overflowTabs = [
        { title: 'Accounts', id: 1 },
        { title: 'Approvals', id: 2 },
        { title: 'Leads', id: 3 },
    ];

    const menuItems = overflowTabs.map(tab => 
        <li key={tab.id} className="slds-dropdown__item" role="presentation">
            <a href="#" role="menuitem" tabIndex="-1">
                <span className="slds-truncate">{tab.title}</span>
            </a>
        </li>
    );

    const toggleMenu = () => {
        setOpen(open = !open)
    };

    return (
        <div className={classNames("slds-dropdown-trigger slds-dropdown-trigger_click", {"slds-is-open": open})}>
            <button className="slds-button" aria-haspopup="true" onClick={toggleMenu}>More</button>
            <div className="slds-dropdown slds-dropdown_right">
                <ul className="slds-dropdown__list slds-dropdown_length-with-icon-10" role="menu">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
}

export default OverflowTabMenu;
