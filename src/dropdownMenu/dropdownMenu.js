import classNames from 'classnames';
import { useState } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import utils from '../utils.js';
import Menu from './menu.js';

function DropdownMenu({ data, useReactRouter, label, handleMenuSelection }) {
    let [open, setOpen] = useState(false);
    let [currentFocusIndex, setCurrentFocusIndex] = useState(0);

    const toggleMenu = () => {
        setOpen(open = !open)
    };


    const handleKeyDownButton = (e) => {
            if(e.keyCode == utils.keys.down) {
                setOpen(open = true);
            }
    };

    const handleKeyDownMenu = (item) => {
        return (e) => {
            if(e.keyCode == utils.keys.down && currentFocusIndex < data.length - 1) {
                setCurrentFocusIndex(currentFocusIndex + 1)
            } else if(e.keyCode == utils.keys.up && currentFocusIndex > 0) {
                setCurrentFocusIndex(currentFocusIndex - 1)
            } else if(e.keyCode == utils.keys.enter) {
                if(!useReactRouter) {
                    handleMenuSelection(item.index)
                }
                setTimeout(() => {
                    toggleMenu()
                }, 0);
            }
        }
    };


    return (
        <div className={classNames("slds-dropdown-trigger slds-dropdown-trigger_click", {"slds-is-open": open})}>
            <button className="slds-button" aria-haspopup="true" onKeyDown={handleKeyDownButton} onClick={toggleMenu}>{label}</button>
            {open ? <Menu data={data} useReactRouter={useReactRouter} handleKeyDownMenu={handleKeyDownMenu} currentFocusIndex={currentFocusIndex} /> : null}
        </div>
    )

}

export default DropdownMenu;
