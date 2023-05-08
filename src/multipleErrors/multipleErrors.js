const multipleErrors = ({errorStyle}) => {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    emailAddress: "",
    mobile: "",
    company: ""
  });  // End setup of useState
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value
    });  // End call to setState()
  };  // End handleChange function

  return (
    <div className="pam">
      <h2>Multiple Errors</h2>
      <form onSubmit={handleSubmit}>
        <div className="slds-form-element" id="form-input-1">
          <label className="slds-form-element__label" htmlFor="name-input-1">
            <abbr className="slds-required" title="required">*</abbr>First name
          </label>
          <div className="slds-form-element__control">
            <input 
              aria-describedby={describedbyValue()}
                className="slds-input" 
                id="name-input-1" 
                required={true} 
                type="text" 
            />
          </div>
          <div className="slds-form-element__help" id="input-error-1" role={renderRole()} style={{display: "none"}}>Complete this field</div>
        </div>
      </form>
    </div>
  );
}; // End multipleErrors component
export default multipleErrors;