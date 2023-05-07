import Panel from './panel.js'
import Modal from '../modal/modal.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const ModalPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [initialFocus, setInitialFocus] = useState('close');

    const settings = [
        { id: 'initialFocus', labels: { label: 'Initial Focus'}, options: ['close', 'heading', 'formField'], currentOption: initialFocus, setOptionHandler: setInitialFocus },
    ];

    return (
        <div className="df df-spaceBetween">
            <section>
                <Modal initialFocus={initialFocus} />
            </section>
            {panelOpen ? <Panel settings={settings} /> : null }
        </div>
    );
};

export default ModalPage;
