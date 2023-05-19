import { useHref, useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const MultipleErrors = ({errorStyle}) => {
  const [displayErrors, setDisplayErrors] = useState(false);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  let errorRef = useRef(null);
  const [state, setState] = useState([
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
  }]);  // End setup of useState

  const focusFirstErrorInput = () => {
    let inputAlreadyFocused = false;
    state.forEach((element) => {
      if(element.isRequired && element.hasError && !inputAlreadyFocused) {
        inputAlreadyFocused = true;
        element.inputRef.current.focus();
      }
    });
  };

  const handleChange = (e) => {
    return (e) => {
      e.stopPropagation();
      const newState = state.map((element) => {
        if('input-' + element.inputId === e.target.id) {
          if(e.target.value.length < 1) {
            return {
              ...element,
              inputValue: e.target.value,
              hasError: false
            }
          } else return {
            ...element,
            hasError: true,
            inputValue: e.target.value
          }
        } else return element;
      });
      setState(newState);
    };
  };  // End handleChange function

  const handleSubmit = (event) => {
    let errorCount = 0;
    let errorsFound = false;
    event.stopPropagation();
    event.preventDefault();
    let newState = state.map((element) => {
      if(element.isRequired && element.inputValue.length < 1) {
        errorsFound = true;
        errorCount++;
        element.inputRef.current.setAttribute('aria-describedby', 'input-error-' + element.inputId);
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
    setFocus();
  };  // End handleSubmit function

  const renderErrorText = (element) => {
    if(element.hasError) {
        return (
            <div className="slds-form-element__help">Complete this field</div>
        )  // End return JSX
    }  // End if hasError
    else return;
  };  // End renderErrorText function

  const renderForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      {displayErrors ? renderErrors() : null}
      {
      state.map((element) => {      
        return (
        <div className="slds-form-element" id={'form-input-' + element.inputId} key={element.inputId}>
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
              ref={element.inputRef}
              name={element.inputName}
              onChange={handleChange}
            />
          </div>
          <div id={'input-error-' + element.inputId}>{renderErrorText(element)}</div>
        </div>
      )})}
      <button type="submit" onClick={handleSubmit}>Submit form</button>
    </form>
    )
  };  // End renderForm function

  const setFocus = () => {
    if(numberOfErrors > 0) {
      if(errorStyle === 'Link') {
        errorRef.current.focus();
      }
      else focusFirstErrorInput();
    }
  };  // End setFocus function

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
        id={'page-error-' + element.inputId}
        onClick={focusInput()}
      >
        {'Error: ' + element.label + ' is a required field.'}
      </a>
    );
  };  // End renderLinkError function

  const renderPlainError = (element) => {
    return (
      <span>
        {'Error: ' + element.label + ' is a required field.'}
        <br/>
      </span>
    )
  };  // End renderPlainError

  const renderErrors = () => {
    return (
      <div role={(errorStyle !== 'Link') ? "status" : null}>
        <p ref={errorRef} tabIndex="-1">The form has {numberOfErrors} errors. Please review them and try again.</p>
        {state.map((element) => {
          if(!element.hasError) {
            return;
          }
          return ((errorStyle === 'Link') ? renderLinkError(element) : renderPlainError(element));
        })}
      </div>
    );
  };  // End renderErrors function

  return (
    <div className="pam">
      <h2>Multiple Errors</h2>
      {renderForm()}
    </div>
  );
}; // End multipleErrors component
export default MultipleErrors;
