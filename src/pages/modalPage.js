import Panel from './panel.js'
import Modal from '../modal/modal.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const ModalPage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();

    return (
        <div className="df df-spaceBetween">
            <section>
                <Modal />
            </section>
            {panelOpen ? <Panel /> : null }
        </div>
    );
};

export default ModalPage;
