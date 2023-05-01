import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const Panel = ({ settings }) => {
    const [panelOpen, handleSettingsClick] = useOutletContext();

    const handleOnChange = (setting) => {
        return (e) => {
            setting.setOptionHandler(setting.currentOption = e.target.value)
        }
    };

    return (
        <aside className="pam border-l width-25">
            <div className="df df-end">
                <Button
                    assistiveText={{ icon: 'Close' }}
                    iconCategory="utility"
                    iconName="close"
                    iconSize="medium"
                    iconVariant="bare"
                    onClick={handleSettingsClick}
                    variant="icon"
                />
            </div>
            {settings.map((setting) => {
                return (
                    <div key={setting.id} className="pvm">
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
            })}
        </aside>
    )
};

export default Panel;
