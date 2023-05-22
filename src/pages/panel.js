import { useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';
import utils from '../utils.js'

const Panel = ({ settings }) => {
    const [panelOpen, handleSettingsClick] = useOutletContext();

    useEffect(() => {
        document.getElementById('buttonRef').focus();
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleSettingsClick()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleOnChange = (setting) => {
        return (e) => {
            setting.setOptionHandler(setting.currentOption = e.target.value)
        }
    };

    return (
        <aside id="panel"className="pam border-l width-25">
            <div className="df df-end">
                <Button
                    assistiveText={{ icon: 'Close Panel' }}
                    id="buttonRef"
                    iconCategory="utility"
                    iconName="close"
                    iconSize="medium"
                    iconVariant="bare"
                    onClick={handleSettingsClick}
                    variant="icon"
                />
            </div>
            {settings && settings.map((setting) => {
                if(setting.type == 'divider') {
                    return <h3 key={setting.id} className="pts mtl slds-text-heading_small border-t">{setting.labels.label}</h3>
                } else {
                return (
                    <div key={setting.id} className="ptm">
                        <RadioButtonGroup
                            labels={setting.labels}
                            onChange={handleOnChange(setting)}
                        >
                            {setting.options.map((option) => (
                                <Radio
                                    key={option}
                                    id={option}
                                    labels={{ label: option }}
                                    value={option}
                                    checked={setting.currentOption == option}
                                    variant="button-group"
                                />
                            ))}
                        </RadioButtonGroup>
                    </div>
                )
                }
            })}
        </aside>
    )
};

export default Panel;
