import { Input, Tooltip } from '@salesforce/design-system-react';
import Modal from '../../modal/modal.js'

const Details = ({ initialFocus }) => {
    const data = [
        { id: 'details-1', label: 'Company Name', value: 'Roe Construction', },
        { id: 'details-2', label: 'Account Executive', value: 'Darnell Johnson', },
        { id: 'details-3', label: 'Address', value: '135 Main Street, Chicago, IL 60185', },
        { id: 'details-4', label: 'Phone', value: '630-356-8495', },
        { id: 'details-5', label: 'email', value: 'test@roeConstruction.com', },
    ];

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
            <Modal details={{ heading: 'Edit Company Details', subtitle: 'Company Details will be reflected for all users and accounts. To learn more, ', btnLabel: 'Edit Details', btnIcon: 'edit', initialFocus: initialFocus}} />
            {renderData()}
        </div>
    )
};

export default Details;

