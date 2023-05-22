import Tabset from '../tabs/tabset.js'
import Panel from './panel.js'
import dummyData from '../dummyData/data.js'
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
    let [errorStyle, setErrorStyle] = useState('summary');

    const settings = [
        { id: 'divider-1', type: 'divider', labels: { label: 'Tabs'}},
        { id: 'tabMarkup', labels: { label: 'HTML'}, options: ['h2', 'landmark'], currentOption: markup, setOptionHandler: setMarkup },
        { id: 'overflowBtn', labels: { label: 'More button'}, options: ['tab', 'arrow'], currentOption: keyboard, setOptionHandler: setKeyboard },
        { id: 'divider-2', type: 'divider', labels: { label: 'Modal'}},
        { id: 'initialFocus', labels: { label: 'Focus'}, options: ['close', 'heading', 'formField'], currentOption: initialFocus, setOptionHandler: setInitialFocus },
        { id: 'divider-3', type: 'divider', labels: { label: 'Pills'}},
        { id: 'pills', labels: { label: 'HTML & keyboard Behavior'}, options: ['listbox', 'button'], currentOption: pillBehavior, setOptionHandler: setPillBehavior },
        { id: 'divider-4', type: 'divider', labels: { label: 'Input Errors'}},
        { id: 'inputError', labels: { label: 'Form Errors - error message status'}, options: ['none', 'status', 'alert'], currentOption: ariaLive, setOptionHandler: setAriaLive},
        { id: 'multipleErrors', labels: { label: 'Form Errors - keyboard focus'}, options: ['summary', 'first field'], currentOption: errorStyle, setOptionHandler: setErrorStyle},
    ];

    return (
        <div className="df df-spaceBetween">
            <div className="width-100">
                <GusHeader 
                    headerData={dummyData.companyHeader} 
                    showModal={true} 
                    initialFocus={initialFocus} 
                    ariaLive={ariaLive}
                    hasError={hasError}
                    setHasError={setHasError}
                    errorStyle={errorStyle}
                />
                <section className="df bg-white mhl pam border-rounded">
                    <Tabset html={markup} overflowBtn={keyboard} pillBehavior={pillBehavior} initialFocus={initialFocus} />
                </section>
            </div>
            {panelOpen ? <Panel settings={settings} /> : null }
        </div>
    );
};

export default RecordHomePage;
