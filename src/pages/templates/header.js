import { Button, Input, InputIcon } from '@salesforce/design-system-react';

const GusHeader = () => {
    const navItems = [
        { label: 'Home', },
        { label: 'Chatter', },
        { label: 'Accounts', },
        { label: 'Opportunities', },
        { label: 'Users', },
    ];
    return (
        <div>
            <header className="phm bg-white df df-center">
                <a href="javascript:void(0)" className="mr-auto">
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
                    assistiveText="Search"
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
                    {navItems.map(item => {
                        return (
                            <li className="phm dib">
                                <a href="javascript:void(0)">
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="slds-brand-band slds-template_profile slds-brand-band_user">
                <div className="df bg-white mam pam border-rounded user-container">
                    <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt="" className="avatar circle" />
                    <div>
                        <h1 className="mhm slds-text-heading_large bold">Darnell Johnson</h1>
                        <p className="mhm dib">Account Executive</p>
                        <p className="dib">d.johnson@test.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GusHeader;
