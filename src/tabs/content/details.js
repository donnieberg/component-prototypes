import { Input, Tooltip } from '@salesforce/design-system-react';
import Modal from '../../modal/modal.js'
import dummyData from '../../dummyData/data.js'

const Details = ({ initialFocus }) => {
    const data = dummyData.companyDetails.slice(3);

    const renderData = () => {
        return data.map(item  => {
            return (
                <div key={item.id} className="slds-form-element detail-item">
                    <Input
                        id={item.id}
                        label={item.label}
                        readOnly
                        value={item.value}
                    />
                </div>
            )
        });
    };

    return (
        <div>
            <Modal details={{ heading: 'Edit Company Details', subtitle: 'Company Details will be reflected for all users and accounts.', btnLabel: 'Edit Details', btnIcon: 'edit', initialFocus: initialFocus}} />
            {renderData()}
        </div>
    )
};

export default Details;

