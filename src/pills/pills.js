import { useState, useRef } from 'react';
import { Button, Input, InputIcon } from '@salesforce/design-system-react';
import utils from '../utils.js'

function Pills({ pillBehavior }) {
    const data = [
        { id: 'pill0', label: 'label 0', selected: true },
        { id: 'pill1', label: 'label 1', selected: false },
        { id: 'pill2', label: 'label 2', selected: false },
        { id: 'pill3', label: 'label 3', selected: false },
        { id: 'pill4', label: 'label 4', selected: false },
        { id: 'pill5', label: 'label 5', selected: false },
    ];

    let [currentPill, setCurrentPill] = useState(data[0]);
    let [currentSelected, setCurrentSelected] = useState(data.slice(0, 3));

    let [currentFocusIndex, setCurrentFocusIndex] = useState(0);
    let [openDropdown, setOpenDropdown] = useState(false);

    // Dropdown -----------------------------------
    const handleKeyDownButton = (e) => {
        if(e.keyCode == utils.keys.down) {
            setOpenDropdown(openDropdown = true);
        } else if(e.keyCode == utils.keys.esc) {
            setOpenDropdown(openDropdown = false);
        } else {
            return;
        }
    };

    const handleKeyDownMenu = (item) => {
        return (e) => {
            if(e.keyCode == utils.keys.down && currentFocusIndex < data.length - 1) {
                setCurrentFocusIndex(currentFocusIndex + 1)
            } else if(e.keyCode == utils.keys.up && currentFocusIndex > 0) {
                setCurrentFocusIndex(currentFocusIndex - 1)
            } else if(e.keyCode == utils.keys.enter) {
                setTimeout(() => {
                    //toggleMenu()
                }, 0);
            } else if(e.keyCode == utils.keys.esc) {
                setOpenDropdown(openDropdown = false);
                //ref.current.focus();
            }
        }
    };

    // Pill container --------------------------------
    const handleDelete = (index) => {
        return () => {
            let nextFocusPill;
            let nextFocusEl;
            const newData = [...currentSelected];
            newData.splice(index, 1);
            setCurrentSelected(currentSelected = newData)
            nextFocusPill = currentSelected[index - 1];
            setCurrentPill(currentPill = nextFocusPill);
            nextFocusEl = nextFocusPill && document.getElementById(nextFocusPill.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
            }
        }
    };

    const handleKeyDown = (index) => {
        return (e) => {
            let nextFocusPill;
            let nextFocusEl;

            if(e.keyCode == utils.keys.right) {
                nextFocusPill = currentSelected[index + 1];
                setCurrentPill(currentPill = nextFocusPill);
            } else if (e.keyCode == utils.keys.left) {
                nextFocusPill = currentSelected[index - 1];
                setCurrentPill(currentPill = nextFocusPill);
            } else if(e.keyCode == utils.keys.backspace || e.keyCode == utils.keys.delete) {
                const newData = [...currentSelected];
                newData.splice(index, 1);
                setCurrentSelected(currentSelected = newData)
                nextFocusPill = currentSelected[index - 1];
            }
            nextFocusEl = nextFocusPill && document.getElementById(nextFocusPill.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
            }
        }
    };

    const renderButtonPills = () => {
        return (
            <div className="slds-pill_container">
                <ul className="slds-listbox slds-listbox_horizontal" aria-orientation="horizontal">
                    {currentSelected.map((pill, i) => {
                        return (
                            <li key={pill.id} className="slds-listbox-item" role="presentation">
                                <span className="slds-pill">
                                    <span className="slds-pill__label">{pill.label}</span>
                                    <Button
                                        assistiveText={{ icon: 'Remove' }}
                                        id={pill.id}
                                        iconCategory="utility"
                                        iconName="close"
                                        iconSize="small"
                                        iconVariant="bare"
                                        onClick={handleDelete(i)}
                                        variant="icon"
                                    />
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    };

    const renderListboxPills = () => {
        return (
            <div className="slds-pill_container">
                <div className="slds-assistive-text" id="listbox-pill-default">Press delete or backspace to remove</div>
                <ul className="slds-listbox slds-listbox_horizontal" role="listbox" aria-label="Selected Options:" aria-orientation="horizontal" aria-describedby="listbox-pill-default">
                    {currentSelected.map((pill, i) => {
                        return (
                            <li key={pill.id} className="slds-listbox-item" role="presentation">
                                <span 
                                    className="slds-pill" 
                                    role="option" 
                                    id={pill.id}
                                    tabIndex={i == 0 ? "0" : "-1"} 
                                    aria-selected={currentPill == pill}
                                    onKeyDown={handleKeyDown(i)}
                                >
                                    <span className="slds-pill__label">{pill.label}</span>
                                    <Button
                                        assistiveText={{ icon: 'Remove' }}
                                        iconCategory="utility"
                                        iconName="close"
                                        iconSize="small"
                                        iconVariant="bare"
                                        onClick={handleDelete(i)}
                                        tabIndex="-1"
                                        variant="icon"
                                    />
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    };

    const renderCombobox = () => {
        return (
            <ul role="listbox">
                {data.map(item => {
                    return (
                        <li role="option">
                            {item.label}
                        </li>
                    )
                })}
            </ul>
        )
    };

    return (
        <div>
            <div className="slds-form-element">
                <label className="slds-form-element__label" for="text-input-id-51">Choose Accounts</label>
                <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
                    <InputIcon
                        assistiveText={{
                            icon: 'Search',
                        }}
                        name="search"
                        category="utility"
                    />
                    <input 
                        type="text" 
                        id="text-input-id-51" 
                        placeholder="Search..." 
                        className="slds-input" 
                    />
                </div>
            </div>
            {renderCombobox()}
            {pillBehavior == 'listbox' ? renderListboxPills() : renderButtonPills()}
        </div>
    )
}

export default Pills;
