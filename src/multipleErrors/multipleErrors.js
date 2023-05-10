import { useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const MultipleErrors = ({errorStyle}) => {
  const [state, setState] = useState([
    {inputName: 'fname',
    inputId: 'input-name-1',
    label: 'First name',
    isRequired: false,
    inputRef: useRef(null),
    hasError: false,
    inputValue: ''
  },
  {inputName: 'lname',
    inputId: 'input-name-2',
    isRequired: true,
    label: 'Last name',
    inputRef: useRef(null),
    hasError: false,
    inputValue: ''
  },
  {inputName: 'email',
    inputId: 'input-name-3',
    isRequired: false,
    label: 'Email address',
    inputRef: useRef(null),
    hasError: false,
    inputValue: ''
  },
  {inputName: 'phone',
    inputId: 'input-name-4',
    isRequired: false,
    label: 'Phone',
    inputRef: useRef(null),
    hasError: false,
    inputValue: ''
  },
  {inputName: 'company',
    inputId: 'input-name-5',
    isRequired: true,
    label: 'Company name',
    inputRef: useRef(null),
    hasError: false,
    inputValue: ''
  }]);  // End setup of useState

  const handleChange = (e) => {
    let currentInputValue = state.get(e.target.name);
    currentInputValue.inputValue = e.target.value;
    setState(new Map(state.set(e.target.name, currentInputValue)));
  };  // End handleChange function
  const renderForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      {
      state.map(element => {      
        return (
        <div key={element.inputId} className="slds-form-element" id="form-input-1">
          <label className="slds-form-element__label" htmlFor={element.inputId}>
            {element.isRequired ? <abbr className="slds-required" title="required">*</abbr> : null}
            {element.label}
          </label>
          <div className="slds-form-element__control">
            <input 
              className="slds-input" 
              id={element.inputId} 
              required={element.isRequired} 
              type="text" 
              ref={element.inputRef}
              name={element.inputName}
            />
          </div>
        </div>
      )})}
    </form>
  )
  };  // End renderForm function
  const handleSubmit = () => {
    //
  };  // End handleSubmit function

  return (
    <div className="pam">
      <h2>Multiple Errors</h2>
      {renderForm()}
    </div>
  );
}; // End multipleErrors component
export default MultipleErrors;
