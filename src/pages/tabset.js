import Tabset from '../tabs/tabset.js'
import Panel from './panel.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const TabsPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [markup, setMarkup] = useState('heading');

    const settings = [
        { id: 'tabMarkup', labels: { label: 'Markup for Tabset HTML'}, options: ['heading', 'landmark'], }
    ];

    return (
        <div className="df df-spaceBetween">
            <section>
                {markup == 'heading' 
                    ? <Tabset variant="heading" />
                    : <Tabset variant="landmark" />}
            </section>
            {panelOpen ? <Panel settings={settings} optionValue={markup} setOptionValue={setMarkup} /> : null }
        </div>
    );
};

export default TabsPage;
