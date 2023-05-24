import { Button, Input, InputIcon } from '@salesforce/design-system-react';
import Modal from '../../modal/modal.js'
import dummyData from '../../dummyData/data.js'
import classnames from "classnames";

const GusHeader = ({ showModal, initialFocus, headerData, ariaLive, hasError, setHasError, errorStyle, linkStyle, linkColor }) => {
    return (
        <div>
            <header className="phm bg-white df df-center">
                <a href="#" className="mr-auto">
                    <img src="https://gus.lightning.force.com/img/salesforce-noname-logo-v2.svg" alt="salesforce logo" className="sf-logo" />
                </a>
                <Input
                    iconLeft={
                        <InputIcon
                            assistiveText={{
                                icon: 'Search',
                            }}
                            name="search"
                            category="utility"
                        />
                    }
                    id="global-search"
                    assistiveText={{label:"Search"}}
                    className="mr-auto global-search"
                    placeholder="Search..."
                />
            </header>
            <nav className="phm bg-white">
                <Button
                    assistiveText={{ icon: 'App Launcher' }}
                    className="dib"
                    iconCategory="utility"
                    iconName="apps"
                    iconSize="large"
                    iconVariant="bare"
                    variant="icon"
                />
                <ul className="dib">
                    {dummyData.navItems.map(item => {
                        return (
                            <li key={item.label} className="phm dib">
                                <a href="#" className={classnames({
                                    'underline': linkStyle == 'Always',
                                    'bold': linkStyle == 'bold',
                                    'blue-40': linkColor == 'blue-40',
                                    'blue-50': linkColor == 'blue-50',
                                    })}>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="slds-brand-band slds-template_profile slds-brand-band_user">
                <div className="df bg-white mhl pam border-rounded user-container">
                    <img src={headerData.imageUrl} alt="" className="avatar circle" />
                    <div>
                        <h1 className="mhm slds-text-heading_large bold">{headerData.label}</h1>
                        <p className="mhm dib">{headerData.subtitle1}</p>
                        <p className="dib">{headerData.subtitle2}</p>
                    </div>
                    {showModal ? <Modal details={{ heading: "Add New User", subtitle: "IMPORTANT: New users will be sent an invitation to join your org. They must approve it within 48 hours. All features for this user will be disabled until then.", example:"user", btnLabel: "New User", btnIcon: "add", initialFocus: initialFocus }} ariaLive={ariaLive} hasError={hasError} setHasError={setHasError} errorStyle={errorStyle} /> : null}
                </div>
            </div>
        </div>
    )
};

export default GusHeader;
