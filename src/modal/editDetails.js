import { Button, Input } from '@salesforce/design-system-react';

function EditCompanyDetails({handleCancel, inputRef}) {
    return (
        <div>
            <div className="pam slds-modal__content">
                <Input
                    id="details-1"
                    label="Last Updated"
                    readOnly
                    value="May 21, 2023 at 2:30pm"
                />
                <Input
                    id="details-2"
                    label="Updated by"
                    readOnly
                    value="Ash Jones"
                />
                <Input
                    id="details-3"
                    label="Company ID"
                    disabled
                    value="GwIG2803-NeWI7391"
                />
                <Input
                    id="details-4"
                    inputRef={inputRef}
                    label="Company Name"
                    value="Roe Construction"
                />
                <Input
                    id="details-5"
                    label="Account Executive"
                    value="Darnell Johnson"
                />
                <Input
                    id="details-6"
                    label="Address"
                    value="135 Main Street, Chicago, IL 60185"
                />
                <Input
                    id="details-7"
                    label="Phone"
                    value="630-356-8495"
                />
                <Input
                    id="details-8"
                    label="Email"
                    value="test@roeConstruction.com"
                />
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
