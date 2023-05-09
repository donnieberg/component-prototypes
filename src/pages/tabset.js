import Tabset from '../tabs/tabset.js'
import Panel from './panel.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const TabsPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [markup, setMarkup] = useState('heading');
    let [keyboard, setKeyboard] = useState('tab');

    const settings = [
        { id: 'tabMarkup', labels: { label: 'Markup for Tabset HTML'}, options: ['heading', 'landmark'], currentOption: markup, setOptionHandler: setMarkup },
        { id: 'overflowBtn', labels: { label: 'Overflow Button keyboard'}, options: ['tab', 'arrow'], currentOption: keyboard, setOptionHandler: setKeyboard }
    ];

    return (
        <div className="df df-spaceBetween">
            <section>
                <Tabset html={markup} overflowBtn={keyboard} />
            </section>
            {panelOpen ? <Panel settings={settings} /> : null }
        </div>
    );
};

export default TabsPage;
