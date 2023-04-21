import classNames from 'classnames';
import { useState } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import MenuItem from './menuItem.js';

function Menu({ data, useReactRouter, handleOnClick, handleKeyDownMenu, currentFocusIndex }) {
    const menuItems = data.map((item, index) => {
        return <MenuItem 
            key={item.id} 
            item={item} 
            index={index}
            currentFocusIndex={currentFocusIndex}
            handleKeyDown={handleKeyDownMenu}
            handleOnClick={handleOnClick}
            useReactRouter={useReactRouter} />;
    });

    return (
        <div className="slds-dropdown slds-dropdown_left">
            <ul className="slds-dropdown__list slds-dropdown_length-with-icon-10" role="menu">
                {menuItems}
            </ul>
        </div>
    )

}

export default Menu;

