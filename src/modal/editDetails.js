import { Button, Input } from '@salesforce/design-system-react';
import dummyData from '../dummyData/data.js'

function EditCompanyDetails({handleCancel, inputRef}) {
    return (
        <div>
            <div className="pam slds-modal__content">
                {dummyData.companyDetails.map( data => {
                    return <Input
                        id={data.id}
                        inputRef={data.id == 'details-4' ? inputRef : null}
                        label={data.label}
                        readOnly={data.readOnly}
                        disabled={data.disabled}
                        value={data.value}
                    />
                })}
            </div>
            <div className="slds-modal__footer">
                <Button 
                    label="Cancel"
                    onClick={handleCancel}
                    variant="neutral"
                />
                <Button 
                    label="Save"
                    onClick={handleCancel}
                    variant="brand"
                />
            </div>
        </div>
    )
};

export default EditCompanyDetails;
