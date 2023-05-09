import { useState, useRef } from ‘react’;
const MultipleErrors = ({errorStyle}) => {
  const fnameRef = useRef(null);
  const [state, setState] = useState(new Map());
  setState(new Map(state.set('fname', {
    inputName: 'fname',
    label: 'First name',
    inputRef: useRef(null),
    inputValue: ''
  })));
  setState(new Map(state.set('lname', {
    inputName: 'lname',
    label: 'Last name',
    inputRef: useRef(null),
    inputValue: ''
  })));
  setState(new Map(state.set('email', {
    inputName: 'email',
    label: 'Email address',
    inputRef: useRef(null),
    inputValue: ''
  })));
  setState(new Map(state.set('phone', {
    inputName: 'phone',
    label: 'Phone',
    inputRef: useRef(null),
    inputValue: ''
  })));
  setState(new Map(state.set('company', {
    inputName: 'company',
    label: 'Company name',
    inputRef: useRef(null),
    inputValue: ''
  })));  // End setup of useState

  const handleChange = (e) => {
    /*
    setState({
      [e.target.name]: e.target.value
    }
    */
    let currentInputValue = state.get(e.target.name);
    currentInputValue.inputValue = e.target.value;
    setState(new Map(state.set(e.target.name, currentInputValue)));
  };  // End handleChange function
  const renderForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      {
      [state.values()].map(element => {      
        (
        <div className="slds-form-element" id="form-input-1">
          <label className="slds-form-element__label" htmlFor="name-input-1">
            <abbr className="slds-required" title="required">*</abbr>
            {element.label}
          </label>
          <div className="slds-form-element__control">
            <input 
              className="slds-input" 
              id="name-input-1" 
              required={true} 
              type="text" 
              ref={inputRef}
              name={element.inputName}
            />
          </div>
          <div className="slds-form-element__help" id="input-error-1" role={renderRole()} style={{display: "none"}}>Complete this field</div>
        </div>
      )})};  // End forEach 
    </form>
  )
  };  // End renderForm function

  return (
    <div className="pam">
      <h2>Multiple Errors</h2>
      {renderForm()}
    </div>
  );
}; // End multipleErrors component
export default MultipleErrors;