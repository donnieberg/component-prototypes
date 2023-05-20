import classNames from 'classnames';
import { useRef } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import utils from '../utils.js';
import { Button, Input } from '@salesforce/design-system-react';
import MultipleErrors from '../multipleErrors/multipleErrors.js'

function Modal({ initialFocus, ariaLive, hasError, setHasError, errorStyle }) {
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
                <MultipleErrors 
                    handleCancel={handleBtnClick}
                    inputRef={formFieldRef}
                    errorStyle={errorStyle} 
                    ariaLive={ariaLive} 
                    hasError={hasError} 
                    setHasError={setHasError} 
                />
            </dialog>
        </div>
    )

}

export default Modal;
