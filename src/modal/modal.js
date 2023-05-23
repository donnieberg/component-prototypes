import classNames from 'classnames';
import { useRef } from 'react';
import { Outlet, BrowserRouter, Route, Link } from "react-router-dom";
import utils from '../utils.js';
import { Button, Input } from '@salesforce/design-system-react';
import MultipleErrors from '../multipleErrors/multipleErrors.js'
import EditCompanyDetails from './editDetails.js';

function Modal({ details, ariaLive, hasError, setHasError, errorStyle, className }) {
    const modalRef = useRef(null);
    const headingRef = useRef(null);
    const formFieldRef = useRef(null);

    const handleBtnClick = () => {
        const modal = modalRef.current;
        if(modal.open) {
            modal.close();
        } else {
            modal.showModal();
            if(details.initialFocus == 'heading') headingRef.current.focus();
            if(details.initialFocus == 'formField') formFieldRef.current.focus();
        }
    };

    return (
        <div className={`ml-auto ${className}`}>
            <Button 
                label={details.btnLabel}
                className={details.btnCSS}
                id="toggleModal" 
                onClick={handleBtnClick} 
                variant="neutral" 
                iconCategory="utility"
                iconName={details.btnIcon}
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
                    <h1 tabIndex="-1" ref={headingRef} className="slds-text-heading_medium">{details.heading}</h1>
                    <p className="dib mrxs slds-text-title width-85">{details.subtitle}</p>
                </div>
                {details.example == 'user' 
                    ? <MultipleErrors 
                        handleCancel={handleBtnClick}
                        inputRef={formFieldRef}
                        errorStyle={errorStyle} 
                        ariaLive={ariaLive} 
                        hasError={hasError} 
                        setHasError={setHasError} 
                    /> : <EditCompanyDetails 
                        handleCancel={handleBtnClick}
                        inputRef={formFieldRef}
                    />
                }
            </dialog>
        </div>
    )

}

export default Modal;
