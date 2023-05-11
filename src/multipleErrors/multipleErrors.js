import { useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const MultipleErrors = ({errorStyle}) => {
  let [displayErrors, setDisplayErrors] = useState(false);
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
    hasError: true,
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

  const handleChange = (e) => {
    return (e) => {
      const newState = state.map((element) => {
        return {
          inputValue: e.target.value,
          ...element,
        }
      });
      setState(newState);
    };
  };  // End handleChange function
  const handleSubmit = (event) => {
    return (e) => {
    e.preventDefault();
    const newState = state.map((element) => {
      if(element.inputValue.length < 1) {
        setDisplayErrors(true);
        return {
          hasError: true,
          ...element
        }
      }  // End if the form field is empty
      return element;
    });
    setState(newState);
  }
  };  // End handleSubmit function
  const renderForm = () => {
  return (
    <form onSubmit={handleSubmit()}>
      {
      state.map(element => {      
        return (
        <div className="slds-form-element" id={'form-input-' + element.inputId}>
          <label className="slds-form-element__label" htmlFor={element.inputId}>
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
        </div>
      )})}
      <button type="submit">Submit form</button>
    </form>
  )
  };  // End renderForm function
  const focusInput = (e) => {
    return (e) => {
      state.map((element) => {
        if(e.target.id === 'page-error-' + state.inputId) {
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
        {element.label + ': is a required field.'}
      </a>
    );
  };  // End renderLinkError function
  const renderPlainError = (element) => {
    return (
      <span>
        {element.label + ': is a required field.'}
      </span>
    )
  };  // End renderPlainError
  const renderErrors = () => {
    return (
      <div role={(errorStyle !== 'Link') ? "status" : null}>
        {state.map((element) => {
          console.log(element.label + ': ' + element.hasError);
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
      {renderErrors()}
      {renderForm()}
    </div>
  );
}; // End multipleErrors component
export default MultipleErrors;