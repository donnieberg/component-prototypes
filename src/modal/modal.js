import classNames from 'classnames';
import { useRef } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import utils from '../utils.js';
import { Button, Input } from '@salesforce/design-system-react';

function Modal({ initialFocus }) {
    const modalRef = useRef(null);
    const headingRef = useRef(null);
    const formFieldRef = useRef(null);

    const handleBtnClick = () => {
        const modal = modalRef.current;
        if(modal.open) {
            modal.close();
        } else {
            modal.showModal();
            if(initialFocus == 'heading') headingRef.current.focus();
            if(initialFocus == 'formField') formFieldRef.current.focus();
        }
    };

    return (
        <div className="ml-auto">
            <Button 
                label="New User" 
                id="toggleModal" 
                onClick={handleBtnClick} 
                variant="neutral" 
                iconCategory="utility"
                iconName="add"
                iconPosition="left"
            />
            <dialog id="dialog" ref={modalRef}>
                <div className="df df-end">
                    <Button 
                        assistiveText={{ icon: 'Close' }}
                        iconCategory="utility"
                        iconName="close"
                        iconSize="small"
                        iconVariant="bare"
                        inverse
                        onClick={handleBtnClick}
                        variant="icon"
                    />
                </div>
                    <div className="slds-modal__header">
                        <h1 tabIndex="-1" ref={headingRef}>Add New User</h1>
                    </div>
                    <div className="pam slds-modal__content">
                        <Input inputRef={formFieldRef} id="firstName" label="First Name" placeholder="Enter in text" />
                        <Input id="lastName" label="Last Name" placeholder="Enter in text" />
                        <Input id="email" label="Email" placeholder="Enter in text" type="email" />
                        <Input id="phone" label="Phone" placeholder="Enter in text" type="tel" />
                    </div>
                <div className="slds-modal__footer">
                    <Button 
                        label="Cancel"
                        onClick={handleBtnClick}
                        variant="neutral"
                    />
                    <Button 
                        label="Save"
                        onClick={handleBtnClick}
                        variant="brand"
                    />
                </div>
            </dialog>
        </div>
    )

}

export default Modal;
