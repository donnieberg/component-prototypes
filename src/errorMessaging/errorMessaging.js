const ErrorMessaging = ({ ariaLive }, { hasError }, { setHasError } ) => {
    const renderRole = () => {
        if(ariaLive === 'none') {
            return;
        } else if (ariaLive === 'status') {
            return 'status';
        } else {
            return 'alert';
        }
    };
    const handleErrorOnBlur = (e) => {
        let formInput1 = document.getElementById("form-input-1");
        if(e.target.value.length < 1) {
            formInput1.classList.add("slds-has-error");
            e.target.setAttribute("aria-invalid", true);
            setHasError(true);
        }  // End if the input is empty
    };  // End handleOnBlur event handler
    const renderErrorText = () => {
        if(hasError) {
            return (
                <div className="slds-form-element__help">Complete this field</div>
            )  // End return JSX
        }  // End if hasError
        else return;
    };  // End renderErrorText function

    return (
        <div className="pam">
            <h2>Error Messaging</h2>
            <div className="slds-form-element" id="form-input-1">
                <label className="slds-form-element__label" htmlFor="name-input-1">
                    <abbr className="slds-required" title="required">*</abbr>Name
                </label>
                <div className="slds-form-element__control">
                    <input 
                        aria-describedby="input-error-1" 
                        className="slds-input" 
                        id="name-input-1" 
                        required={true} 
                        type="text" 
                        onBlur={handleErrorOnBlur}
                    />
                </div>
                <div id="input-error-1" html-role={renderRole()}>{renderErrorText()}</div>
            </div>
            <div className="slds-form-element" id="form-input-2">
                <label className="slds-form-element__label" htmlFor="phone-input-1">
                    Phone
                </label>
                <div className="slds-form-element__control">
                    <input 
                        className="slds-input" 
                        id="phone-input-1" 
                        type="text" 
                    />
                </div>
            </div>
        </div>
    );
};

export default ErrorMessaging;
