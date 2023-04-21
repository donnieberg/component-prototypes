import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";

function MenuItem(props) {
    const { item, index, currentFocusIndex, useReactRouter, handleOnClick, handleKeyDown } = props;
    const ref = useRef(null);
    useEffect(() => {
        if(index == currentFocusIndex) {
            ref.current.focus();
        }
    })

    const renderLink = () => {
        if(useReactRouter) {
            return (
                <Link to={`/${item.link}`} ref={ref} onKeyDown={handleKeyDown(item)}>
                    {item.title}
                </Link>
            )
        } else {
            return (
                <a href="#" 
                    role="menuitem" 
                    tabIndex="-1"
                    ref={ref}
                    onKeyDown={handleKeyDown(item)}
                    onClick={handleOnClick(item)}
                >
                    <span className="slds-truncate">{item.title}</span>
                </a>
            )
        }
    };

    return (
        <li className="slds-dropdown__item" role="presentation">
            {renderLink()}
        </li>
    )

}

export default MenuItem;

