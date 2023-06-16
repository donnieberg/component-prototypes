import { useHref, useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Button, Input } from '@salesforce/design-system-react';
import classnames from "classnames";

const MultipleErrors = ({ inputRef, errorStyle, ariaLive, handleCancel }) => {
    const [displayErrors, setDisplayErrors] = useState(false);
    const [numberOfErrors, setNumberOfErrors] = useState(0);
    let errorRef = useRef(null);
    const initialFormFields = [
        {inputName: 'fname',
            inputId: '1',
            label: 'First name',
            isRequired: false,
            inputRef: useRef(null),
            hasError: false,
            inputValue: ''
        },
        {inputName: 'lname',
            inputId: '2',
            isRequired: true,
            label: 'Last name',
            inputRef: useRef(null),
            hasError: false,
            inputValue: ''
        },
        {inputName: 'email',
            inputId: '3',
            isRequired: false,
            label: 'Email address',
            inputRef: useRef(null),
            hasError: false,
            inputValue: ''
        },
        {inputName: 'phone',
            inputId: '4',
            isRequired: false,
            label: 'Phone',
            inputRef: useRef(null),
            hasError: false,
            inputValue: ''
        },
        {inputName: 'company',
            inputId: '5',
            isRequired: true,
            label: 'Company name',
            inputRef: useRef(null),
            hasError: false,
            inputValue: ''
        }];
    const [state, setState] = useState(initialFormFields);

    const focusFirstErrorInput = () => {
        let inputAlreadyFocused = false;
        state.forEach((element) => {
            if(element.isRequired && element.hasError && !inputAlreadyFocused) {
                inputAlreadyFocused = true;
                element.inputRef.current.focus();
            }
        });
    };

    const renderRole = () => {
        if(ariaLive === 'none') {
            return;
        } else if (ariaLive === 'status') {
            return 'status';
        } else {
            return 'alert';
        }
    };

    const handleErrorOnBlur = (element) => {
        return (e) => {
          let elementHasError = false;  
          if(element.isRequired) {
                let formInput = element.inputRef.current;
                if(e.target.value.length < 1) {
                  elementHasError = true;  
                  //formInput.classList.add("slds-has-error");
                  setTimeout(() => {
                    e.target.setAttribute("aria-invalid", true);
                    e.target.setAttribute("aria-describedby", "input-error-" + element.inputId);
                  }, 300);  
                }  // End if the input is empty
                else elementHasError = false;
            }
            const newState = state.map((element) => {
              if('input-' + element.inputId === e.target.id) {
                  return {
                      ...element,
                      hasError: elementHasError
                  }
              } else return element;
          });
          setState(newState);
        }
    };  // End handleOnBlur event handler

    const handleFormCancel = (event) => {
        state.forEach((element) => {
            if(element.hasError) {
                removeAriaAttributes(element.inputRef.current);
            }  // End if element hasError
        });
        setDisplayErrors(false);
        setNumberOfErrors(0);
        setState(initialFormFields);
        handleCancel(event);
    };  // End handleFormCancel function

    const renderErrorText = (element) => {
        if(element.hasError) {
            return (
                <div className="slds-form-element__help">Complete this field</div>
            )  // End return JSX
        }  // End if hasError
        else return;
    };  // End renderErrorText function

    const removeAriaAttributes = (element) => {
        element.removeAttribute("aria-describedby");
        element.removeAttribute("aria-invalid");
    };  // 

    const handleChange = (element) => {
        return (e) => {
            e.stopPropagation();
            let elementHasError = false;  
            if(element.isRequired) {
                  let formInput = element.inputRef.current;
                  if(e.target.value.length > 0) {
                    elementHasError = false;
                    removeAriaAttributes(e.target);
                  }  // End if the input is not empty
              }
            const newState = state.map((element) => {
                if('input-' + element.inputId === e.target.id) {
                    return {
                        ...element,
                        inputValue: e.target.value,
                        hasError: elementHasError
                    }
                } else return element;
            });
            setState(newState);
        };
    };  // End handleChange function

    const handleSubmit = (event) => {
        let errorCount = 0;
        let errorsFound = false;
        let elementRef = null;
        event.stopPropagation();
        event.preventDefault();
        let newState = state.map((element) => {
            if(element.isRequired && element.inputValue.length < 1) {
                if(!errorsFound) {
                    elementRef = element.inputRef;
                }
                errorsFound = true;
                errorCount++;
                return {
                    ...element,
                    hasError: true
                }
            }  // End if the form field is empty
            else return element;
        });
        setState(newState);
        setNumberOfErrors(errorCount);
        setDisplayErrors(errorsFound);
        if(errorCount > 0) {
            if(errorStyle === 'summary') {
                errorRef.current.focus();
            }
            else elementRef.current.focus();
        }
    };  // End handleSubmit function

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit} className="pam slds-modal__content">
                <div ref={errorRef} tabIndex="-1" role={(errorStyle !== 'summary') ? "status" : null} >
                    {displayErrors ? renderErrors() : null}
                </div>
                {state.map(element => {      
                    return (
                        <div className={classnames('slds-form-element', {
                            "slds-has-error": element.hasError
                            })} 
                            id={'form-input-' + element.inputId} 
                            key={element.inputId}
                        >
                            <label className="slds-form-element__label" htmlFor={'input-' + element.inputId}>
                                {element.isRequired ? <abbr className="slds-required" title="required">*</abbr> : null}
                                {element.label}
                            </label>
                            <div className="slds-form-element__control">
                                <input 
                                    className="slds-input" 
                                    id={'input-' + element.inputId} 
                                    required={element.isRequired} 
                                    type="text" 
                                    ref={element.inputId == "1" ? inputRef : element.inputRef}
                                    name={element.inputName}
                                    value={element.inputValue}
                                    onChange={handleChange(element)}
                                    onBlur={handleErrorOnBlur(element)}
                                />
                            </div>
                            <div className="slds-form-element__help" id={"input-error-" + element.inputId} role={renderRole()}>{renderErrorText(element)}</div>
                        </div>
                    )})}
            </form>
        )
    };  // End renderForm function

    const focusInput = (e) => {
        return (e) => {
            e.preventDefault();
            state.map((element) => {
                if(e.target.id === 'page-error-' + element.inputId) {
                    element.inputRef.current.focus();
                }
                return element;
            });
        }
    };  // End focusInput function

    const renderLinkError = (element) => {
        return (
            <a href="#"
                className="db"
                id={'page-error-' + element.inputId}
                key={'page-error-' + element.inputId}
                onClick={focusInput()}
            >
                {'Error: ' + element.label + ' is a required field.'}
            </a>
        );
    };  // End renderLinkError function

    const renderPlainError = (element) => {
        return (
            <span className="db" key={'span-error-' + element.inputId}>
                {'Error: ' + element.label + ' is a required field.'}
                <br/>
            </span>
        )
    };  // End renderPlainError

    const renderErrors = () => {
        return (
            <div>
                <p >The form has {numberOfErrors} errors. Please review them and try again.</p>
                {state.map((element) => {
                    if(!element.hasError) {
                        return;
                    }
                    return ((errorStyle === 'summary') ? renderLinkError(element) : renderPlainError(element));
                })}
            </div>
        );
    };  // End renderErrors function

    return (
        <div>
            {renderForm()}
            <div className="slds-modal__footer">
                <Button 
                    label="Cancel"
                    onClick={handleFormCancel}
                    variant="neutral"
                />
                <Button 
                    label="Save"
                    onClick={handleSubmit}
                    variant="brand"
                />
            </div>
        </div>
    );
}; // End multipleErrors component
export default MultipleErrors;
