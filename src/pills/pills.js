import { useState, useRef } from 'react';
import { Button, Input, InputIcon, Icon } from '@salesforce/design-system-react';
import utils from '../utils.js'
import Menu from '../dropdownMenu/menu.js';
import classnames from "classnames";

function Pills({ pillBehavior }) {
    const data = [
        { id: 'pill0', title: 'label 0', selected: true },
        { id: 'pill1', title: 'label 1', selected: false },
        { id: 'pill2', title: 'label 2', selected: false },
        { id: 'pill3', title: 'label 3', selected: false },
        { id: 'pill4', title: 'label 4', selected: false },
        { id: 'pill5', title: 'label 5', selected: false },
    ];

    let inputRef = useRef(null);
    let [currentFocusIndex, setCurrentFocusIndex] = useState(0);
    let [openDropdown, setOpenDropdown] = useState(false);
    let [currentPill, setCurrentPill] = useState(data[0]);
    let [currentSelected, setCurrentSelected] = useState(data.slice(0, 3));

    // Dropdown -----------------------------------
    // ---------------------------------------------------------------------------------------
    //
    const toggleMenuSelection = (item) => {
        return () => {
            const index = currentSelected.findIndex(obj => obj.id === item.id);
            if(index > 0) {
                const newData = currentSelected.filter(pill => { return pill.id != item.id });
                setCurrentSelected(currentSelected = newData);
            } else {
                const newData = [...currentSelected, item]
                setCurrentSelected(currentSelected = newData);
            }
        }
    };

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
                toggleMenuSelection(item)();
            } else if(e.keyCode == utils.keys.esc) {
                setOpenDropdown(openDropdown = false);
                inputRef.current.focus();
            }
        }
    };

    // Pill container --------------------------------
    // ---------------------------------------------------------------------------------------

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

    const handleKeyDownPill = (index) => {
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

    const filterSelectedPills = (item) => {
        return currentSelected.filter(pill => {
            return pill.id == item.id;
        });
    };

    const renderButtonPills = () => {
        return (
            <div className="slds-pill_container">
                <ul className="slds-listbox slds-listbox_horizontal" aria-orientation="horizontal">
                    {currentSelected.map((pill, i) => {
                        return (
                            <li key={pill.id} className="slds-listbox-item" role="presentation">
                                <span className="slds-pill">
                                    <span className="slds-pill__label">{pill.title}</span>
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
                                    onKeyDown={handleKeyDownPill(i)}
                                >
                                    <span className="slds-pill__label">{pill.title}</span>
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

    return (
        <div>
            <div className="slds-form-element">
                <label id="pillInputId" className="slds-form-element__label">Choose Accounts</label>
                <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
                    <div 
                        role="combobox" 
                        tabIndex="0" 
                        className="slds-input_faux slds-combobox__input" 
                        id="combobox-1" 
                        aria-labelledby="pillInputId"
                        aria-controls="listbox-1" 
                        aria-expanded="false" 
                        aria-haspopup="listbox"
                        onKeyDown={handleKeyDownButton}
                        ref={inputRef}
                    >
                        <span className="slds-truncate">{currentSelected.length > 0 ? `${currentSelected.length} options selected` : "Select an Option…"}</span>
                    </div>
                    <InputIcon
                        assistiveText={{ icon: 'Down' }}
                        name="down"
                        size="small"
                        category="utility"
                    />
                </div>
            </div>
            {openDropdown ? <Menu data={data} linkVariant='option' handleKeyDownMenu={handleKeyDownMenu} handleOnClick={toggleMenuSelection} currentFocusIndex={currentFocusIndex} currentSelected={currentSelected} /> : null}
            {pillBehavior == 'listbox' ? renderListboxPills() : renderButtonPills()}
        </div>
    )
}

export default Pills;
