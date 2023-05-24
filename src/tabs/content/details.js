import { Input, Tooltip } from '@salesforce/design-system-react';
import classnames from "classnames";
import Modal from '../../modal/modal.js'
import dummyData from '../../dummyData/data.js'

const Details = ({ initialFocus, linkStyle, linkColor }) => {
    const data = dummyData.companyDetails.slice(3);

    const renderData = () => {
        return data.map(item  => {
            return (
                <div key={item.id} className={classnames("slds-form-element detail-item", {
                    'mtn-l': item.id == 'details-4'
                    })}>
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
        <div className="df df-column">
            <Modal details={{ heading: 'Edit Company Details', subtitle: 'Company Details will be reflected for all users and accounts.', btnLabel: 'Edit Details', btnIcon: 'edit', initialFocus: initialFocus}} />
            {renderData()}
            <div className="slds-form-element detail-item">
                <div className="slds-form-element__label" htmlFor="text-input-id-47">Company Summary</div>
                <div className="slds-form-element__control ptxs">
                    Roe Construction Ltd is a civil engineering and building contractor, formed in 1982, 
                    focused on providing safe, sustainable, cost effective solutions to clients across the Chicago area.
                    Working with our&nbsp;
                    <a href="#" className={classnames({
                        'underline': linkStyle == 'Always' || linkStyle == 'Paragraph',
                        'bold': linkStyle == 'bold',
                        'blue-40': linkColor == 'blue-40',
                        'blue-50': linkColor == 'blue-50',
                    })}>
                        top Regional Clients
                    </a>
                    &nbsp;offers innovative, high quality, cost effective solutions for their 
                    projects contributes to us building long lasting relationships and repeat business.&nbsp;
                    <a href="#" className={classnames({
                        'underline': linkStyle == 'Always' || linkStyle == 'Paragraph',
                        'bold': linkStyle == 'bold',
                        'blue-40': linkColor == 'blue-40',
                        'blue-50': linkColor == 'blue-50',
                    })}>
                        Check out our recent projects here.
                    </a>
                    &nbsp;In celebrating over 38 years of trading we take great pride in being a local contractor with a national 
                    identity undertaking projects for major businesses and organisations across the country.
                </div>
            </div>
        </div>
    )
};

export default Details;

