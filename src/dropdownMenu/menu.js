import classNames from 'classnames';
import { useState } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import MenuItem from './menuItem.js';

function Menu({ data, linkVariant, handleOnClick, handleKeyDownMenu, currentFocusIndex, currentSelected }) {
    const menuItems = data.map((item, index) => {
        const matchesArr = currentSelected && currentSelected.filter(pill => {
            return pill.id == item.id;
        });
        return <MenuItem 
            key={item.id} 
            item={item} 
            index={index}
            currentFocusIndex={currentFocusIndex}
            handleKeyDown={handleKeyDownMenu}
            handleOnClick={handleOnClick}
            linkVariant={linkVariant} 
            renderCheckMark={matchesArr && matchesArr.length > 0}
        />;
    });

    const menuClassNames = () => {
        if(linkVariant == 'option') {
            return "slds-dropdown slds-dropdown_length-5 slds-dropdown_fluid slds-listbox slds-listbox_vertical"
        } else {
            return "slds-dropdown slds-dropdown_left slds-dropdown__list slds-dropdown_length-with-icon-10"
        }
    };

    return (
        <div className={menuClassNames()}>
            <ul role={linkVariant == 'option' ? "listbox" : "menu"}>
                {menuItems}
            </ul>
        </div>
    )

}

export default Menu;

