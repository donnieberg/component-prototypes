import Panel from './panel.js'
import ErrorMessaging from '../errorMessaging/errorMessaging.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const ErrorMessagingPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [ariaLive, setAriaLive] = useState('none');
    let [hasError, setHasError] = useState(false);

    const settings = [
        { id: 'inputError', labels: { label: 'Markup for Input Errors'}, options: ['none', 'status', 'alert'], }
    ];

    return (
        <div className="df df-spaceBetween">
            <section>
                <ErrorMessaging ariaLive={ariaLive} hasError={hasError} setHasError={setHasError} />
            </section>
            {panelOpen ? <Panel settings={settings} optionValue={ariaLive} setOptionValue={setAriaLive} /> : null }
        </div>
    );
};

export default ErrorMessagingPage;
