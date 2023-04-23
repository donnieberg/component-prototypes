import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const Panel = ({ optionValue, setOptionValue, settings }) => {
    const [panelOpen, handleSettingsClick] = useOutletContext();

    const handleOnChange = () => {
        return (e) => {
            setOptionValue(optionValue = e.target.value)
        }
    };

    return (
        <aside className="pam border-l width-25">
            {settings.map((setting) => {
                return (
                    <div key={setting.id}>
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
                        <RadioButtonGroup
                            labels={setting.labels}
                            onChange={handleOnChange()}
                        >
                            {setting.options.map((option) => (
                                <Radio
                                    key={option}
                                    id={option}
                                    labels={{ label: option }}
                                    value={option}
                                    checked={optionValue == option}
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
