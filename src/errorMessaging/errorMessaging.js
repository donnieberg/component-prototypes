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
    let describedbyId = "";
    const describedbyValue = () => {
        return describedbyId;
    };  // End describedbyValue function
    const handleErrorOnBlur = (e) => {
        let formInput1 = document.getElementById("form-input-1");
        let nameInput = document.getElementById("name-input-1");
        let nameError = document.getElementById("input-error-1");
        if(e.target.value.length < 1) {
            formInput1.classList.add("slds-has-error");
            e.target.setAttribute("aria-invalid", true);
            describedbyId = "input-error-1";
            nameError.style.display = "block";
        }  // End if the input is empty
    };  // End handleOnBlur event handler

    return (
        <div className="pam">
            <h2>Error Messaging</h2>
            <div className="slds-form-element" id="form-input-1">
                <label className="slds-form-element__label" htmlFor="name-input-1">
                    <abbr className="slds-required" title="required">*</abbr>Name
                </label>
                <div className="slds-form-element__control">
                    <input 
                        aria-describedby={describedbyValue}
                        className="slds-input" 
                        id="name-input-1" 
                        required={true} 
                        type="text" 
                        onBlur={handleErrorOnBlur}
                    />
                </div>
                <div className="slds-form-element__help" id="input-error-1" role={renderRole()} style={{display: "none"}}>Complete this field</div>
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
