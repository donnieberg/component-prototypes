import Tabset from '../tabs/tabset.js'
import Panel from './panel.js'
import GusHeader from './templates/header.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const RecordHomePage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [markup, setMarkup] = useState('h2');
    let [keyboard, setKeyboard] = useState('tab');
    let [initialFocus, setInitialFocus] = useState('close');
    let [pillBehavior, setPillBehavior] = useState('button');
    let [ariaLive, setAriaLive] = useState('none');
    let [hasError, setHasError] = useState(false);
    let [errorStyle, setErrorStyle] = useState('Link');

    const settings = [
        { id: 'tabMarkup', labels: { label: 'Tabs - HTML'}, options: ['h2', 'landmark'], currentOption: markup, setOptionHandler: setMarkup },
        { id: 'overflowBtn', labels: { label: 'Tabs - keyboard behavior for More button'}, options: ['tab', 'arrow'], currentOption: keyboard, setOptionHandler: setKeyboard },
        { id: 'initialFocus', labels: { label: 'Modal - keyboard Focus'}, options: ['close', 'heading', 'formField'], currentOption: initialFocus, setOptionHandler: setInitialFocus },
        { id: 'pills', labels: { label: 'Pills - HTML & keyboard Behavior'}, options: ['listbox', 'button'], currentOption: pillBehavior, setOptionHandler: setPillBehavior },
        { id: 'inputError', labels: { label: 'Form Errors - error message status'}, options: ['none', 'status', 'alert'], currentOption: ariaLive, setOptionHandler: setAriaLive},
        { id: 'multipleErrors', labels: { label: 'Form Errors - keyboard focus'}, options: ['summary', 'first field'], currentOption: errorStyle, setOptionHandler: setErrorStyle},
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
                <GusHeader 
                    headerData={headerData} 
                    showModal={true} 
                    initialFocus={initialFocus} 
                    ariaLive={ariaLive}
                    hasError={hasError}
                    setHasError={setHasError}
                    errorStyle={errorStyle}
                />
                <section className="df bg-white mhl pam border-rounded">
                    <Tabset html={markup} overflowBtn={keyboard} pillBehavior={pillBehavior} />
                </section>
            </div>
            {panelOpen ? <Panel settings={settings} /> : null }
        </div>
    );
};

export default RecordHomePage;
