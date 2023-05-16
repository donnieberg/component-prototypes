import Tabset from '../tabs/tabset.js'
import Panel from './panel.js'
import GusHeader from './templates/header.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const RecordHomePage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [markup, setMarkup] = useState('heading');
    let [keyboard, setKeyboard] = useState('tab');
    let [initialFocus, setInitialFocus] = useState('close');

    const settings = [
        { id: 'tabMarkup', labels: { label: 'Markup for Tabset HTML'}, options: ['heading', 'landmark'], currentOption: markup, setOptionHandler: setMarkup },
        { id: 'overflowBtn', labels: { label: 'Overflow Button keyboard'}, options: ['tab', 'arrow'], currentOption: keyboard, setOptionHandler: setKeyboard },
        { id: 'initialFocus', labels: { label: 'Initial Focus'}, options: ['close', 'heading', 'formField'], currentOption: initialFocus, setOptionHandler: setInitialFocus },
    ];

    const headerData = {
        label: 'Test Company',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9qA5rhWrP9BLNjO_I2eikwD5D6%26pid%3DApi&f=1&ipt=726272091737fdada1fb8539e90db340d015b588c45fe9a4010c17da96fc030d&ipo=images',
        subtitle1: 'Consumer Brand',
        subtitle2: "5,000-10,000 employees",
    };

    return (
        <div className="df df-spaceBetween">
            <div className="width-100">
                <GusHeader headerData={headerData} showModal={true} initialFocus={initialFocus} />
                <section className="df bg-white mhl pam border-rounded">
                    <Tabset html={markup} overflowBtn={keyboard} />
                </section>
            </div>
            {panelOpen ? <Panel settings={settings} /> : null }
        </div>
    );
};

export default RecordHomePage;
