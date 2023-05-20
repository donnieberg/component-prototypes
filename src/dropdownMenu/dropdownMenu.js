import classNames from 'classnames';
import { useState, useRef } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import { Icon } from '@salesforce/design-system-react';
import utils from '../utils.js';
import Menu from './menu.js';
import { ClickAwayListener } from '@mui/base';

function DropdownMenu({ data, linkVariant, label, handleMenuSelection, openDropdown, setOpenDropdown, overflowBtn }) {
    let [currentFocusIndex, setCurrentFocusIndex] = useState(0);
    const ref = useRef(null);

    const toggleMenu = () => {
        setOpenDropdown(openDropdown = !openDropdown)
    };

    const handleClickAway = () => {
        setOpenDropdown(openDropdown = false);
    };

    const handleOnClickMenu = (item) => {
        return () => {
            handleMenuSelection(item)
        }
    };

    const handleKeyDownButton = (e) => {
            if(e.keyCode == utils.keys.down) {
                setOpenDropdown(openDropdown = true);
            } else if(e.keyCode == utils.keys.esc) {
                setOpenDropdown(openDropdown = false);
            } else {
                return;
            }
    };

    const handleKeyDownMenu = (item) => {
        return (e) => {
            if(e.keyCode == utils.keys.down && currentFocusIndex < data.length - 1) {
                setCurrentFocusIndex(currentFocusIndex + 1)
            } else if(e.keyCode == utils.keys.up && currentFocusIndex > 0) {
                setCurrentFocusIndex(currentFocusIndex - 1)
            } else if(e.keyCode == utils.keys.enter) {
                if(linkVariant != 'reactRouter') {
                    handleMenuSelection(item)
                }
                setTimeout(() => {
                    toggleMenu()
                }, 0);
            } else if(e.keyCode == utils.keys.esc) {
                setOpenDropdown(openDropdown = false);
                ref.current.focus();
            }
        }
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classNames("slds-dropdown-trigger slds-dropdown-trigger_click", {"slds-is-open": openDropdown})}>
            <button 
                ref={ref} 
                className="slds-button" 
                aria-haspopup="true" 
                onKeyDown={handleKeyDownButton} 
                onClick={toggleMenu}
                tabIndex={overflowBtn == 'arrow' ? '-1' : '0'}
            >
                <span className="mrxs">
                    {label}
                </span>
                <Icon
                    assistiveText={{ label: '' }}
                    category="utility"
                    name="chevrondown"
                    size="xx-small"
                />
            </button>
            {openDropdown ? <Menu data={data} linkVariant={linkVariant} handleKeyDownMenu={handleKeyDownMenu} handleOnClick={handleOnClickMenu} currentFocusIndex={currentFocusIndex} /> : null}
        </div>
        </ClickAwayListener>
    )

}

export default DropdownMenu;
