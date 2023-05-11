const Details = () => {
    const data = [
        { id: 'details-1', label: 'Company Name', value: 'Test Company', },
        { id: 'details-2', label: 'Account Executive', value: 'Darnell Johnson', },
        { id: 'details-3', label: 'Address', value: '135 Main Street, Chicago, IL 60185', },
        { id: 'details-4', label: 'Phone', value: '630-356-8495', },
        { id: 'details-5', label: 'email', value: 'test@testCompany.com', },
    ];

    const renderData = () => {
        return data.map(item  => {
            return (
                <div key={item.id} className="slds-form-element detail-item">
                    <label className="slds-form-element__label" for={item.id}>{item.label}</label>
                    <div className="slds-form-element__control">
                        <input type="text" id={item.id} readonly="" placeholder="" className="slds-input" value={item.value} />
                    </div>
                </div>
            )
        });
    };

    return (
        <div>
            {renderData()}
        </div>
    )
};

export default Details;

