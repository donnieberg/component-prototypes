import { useOutletContext } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';
import DropdownMenu from '../dropdownMenu/dropdownMenu.js';
import utils from '../utils.js'

const Panel = ({ settings }) => {
    const pageLinks = [
        { id: 'page1', link: '', title: 'Home' },
        { id: 'page2', link: 'recordHome', title: 'Record Home' },
        { id: 'page4', link: 'multipleErrors', title: 'multipleErrors' },
        { id: 'page5', link: 'errorMessaging', title: 'errorMessaging' },
    ];

    const [panelOpen, handleSettingsClick] = useOutletContext();
    let [openDropdown, setOpenDropdown] = useState(false);

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

    const determineCurrentPage = () => {
        if(window.location.hash == '#/recordHome') {
            return 'Record Home';
        } else if(window.location.hash == '#/multipleErrors') {
            return 'Multiple Errors';
        } else if(window.location.hash == '#/errorMessaging') {
            return 'Error Messaging';
        } else {
            return 'Home'
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
            {/* 
            <h2>Current Page: {determineCurrentPage()}</h2>
            <DropdownMenu
                label="Pages"
                className="slds-dropdown"
                data={pageLinks}
                linkVariant="reactRouter"
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
            />

            */}
            {settings && settings.map((setting) => {
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
