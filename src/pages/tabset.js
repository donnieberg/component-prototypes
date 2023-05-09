import Tabset from '../tabs/tabset.js'
import Panel from './panel.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Input, InputIcon } from '@salesforce/design-system-react';

const TabsPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [markup, setMarkup] = useState('heading');
    let [keyboard, setKeyboard] = useState('tab');

    const settings = [
        { id: 'tabMarkup', labels: { label: 'Markup for Tabset HTML'}, options: ['heading', 'landmark'], currentOption: markup, setOptionHandler: setMarkup },
        { id: 'overflowBtn', labels: { label: 'Overflow Button keyboard'}, options: ['tab', 'arrow'], currentOption: keyboard, setOptionHandler: setKeyboard }
    ];

    const navItems = [
        { label: 'Home', },
        { label: 'Chatter', },
        { label: 'Accounts', },
        { label: 'Opportunities', },
        { label: 'Users', },
    ];

    return (
        <div className="df df-spaceBetween">
            <div className="width-75">
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
                        className="mr-auto"
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
                                <li className="phm dib">{item.label}</li>
                            )
                        })}
                    </ul>
                </nav>
                <section>
                    <Tabset html={markup} overflowBtn={keyboard} />
                </section>
            </div>
            {panelOpen ? <Panel settings={settings} /> : null }
        </div>
    );
};

export default TabsPage;
