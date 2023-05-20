import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import { Icon } from '@salesforce/design-system-react';

function MenuItem(props) {
    const { item, index, currentFocusIndex, linkVariant, handleOnClick, handleKeyDown, renderCheckMark } = props;
    const ref = useRef(null);
    useEffect(() => {
        if(index == currentFocusIndex) {
            ref.current.focus();
        }
    })

    const renderLink = () => {
        if(linkVariant == 'reactRouter') {
            return (
                <Link 
                    to={`/${item.link}`} 
                    ref={ref} 
                    onKeyDown={handleKeyDown(item)}
                >
                    {item.title}
                </Link>
            )
        } else if(linkVariant == 'option') {
            return (
                <a 
                    role="option" 
                    tabIndex="-1"
                    ref={ref}
                    className={classNames('slds-media slds-listbox__option slds-listbox__option_plain slds-media_small', {
                        'bg-hover': currentFocusIndex == index
                    })}
                    aria-checked={renderCheckMark ? 'true' : 'false'}
                    onKeyDown={handleKeyDown(item)}
                    onClick={handleOnClick(item)}
                >
                    {renderCheckMark ? <Icon assistiveText={{ icon: 'checked', }} name="check" className="mrxs" size="x-small" category="utility" /> : null}
                    {item.title}
                </a>
            )
        } else {
            return (
                <a 
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
        <li className={linkVariant == 'option' ? "" : "slds-dropdown__item"} role="presentation">
            {renderLink()}
        </li>
    )

}

export default MenuItem;

