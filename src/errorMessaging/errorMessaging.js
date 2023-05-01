const ErrorMessaging = ({ ariaLive }) => {
    const renderRole = () => {
        if(ariaLive == 'none') {
            return;
        } else if (ariaLive == 'status') {
            return 'status';
        } else {
            return 'alert';
        }
    };

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
                        role={renderRole()}
                        type="text" 
                    />
                </div>
                <div className="slds-form-element__help" id="input-error-1">Complete this field</div>
            </div>
            <div className="slds-form-element" id="form-input-2">
                <label className="slds-form-element__label" htmlFor="phone-input-1">
                    Phone
                </label>
                <div className="slds-form-element__control">
                    <input 
                        aria-describedby="input-error-1"
                        className="slds-input" 
                        id="phone-input-1" 
                        role={renderRole()}
                        type="text" 
                    />
                </div>
            </div>
        </div>
    );
};

export default ErrorMessaging;
