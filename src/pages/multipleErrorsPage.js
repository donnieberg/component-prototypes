import Panel from './panel.js'
import MultipleErrors from '../multipleErrors/multipleErrors.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const MultipleErrorsPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [errorStyle, setErrorStyle] = useState('Link');

    const settings = [
        { id: 'multipleErrors', labels: { label: 'Select an error type'}, options: ['Link', 'Focus first'], currentOption: errorStyle, setOptionHandler: setErrorStyle}
    ];

    return (
        <div className="df df-spaceBetween">
            <section>
                <MultipleErrors errorStyle={errorStyle} />
            </section>
            {panelOpen ? <Panel settings={settings}  /> : null }
        </div>
    );
};

export default MultipleErrorsPage;
