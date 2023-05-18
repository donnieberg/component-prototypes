import { useState, useRef } from 'react';
import { Button } from '@salesforce/design-system-react';
import utils from '../utils.js'

function Pills({ pillBehavior }) {
    const data = [
        { id: 'pill0', label: 'label 0', selected: true },
        { id: 'pill1', label: 'label 1', selected: false },
        { id: 'pill2', label: 'label 2', selected: false },
        { id: 'pill3', label: 'label 3', selected: false },
    ];

    let [currentData, setCurrentData] = useState(data);
    let [currentSelected, setCurrentSelected] = useState(currentData[0]);
    let [currentPill, setCurrentPill] = useState(currentData[0]);

    const handleDelete = (index) => {
        return () => {
            let nextFocusPill;
            let nextFocusEl;
            const newData = [...currentData];
            newData.splice(index, 1);
            setCurrentData(currentData = newData)
            nextFocusPill = currentData[index - 1];
            setCurrentSelected(currentSelected = nextFocusPill);
            nextFocusEl = nextFocusPill && document.getElementById(nextFocusPill.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
                setCurrentPill(currentPill = nextFocusPill)
            }
        }
    };

    const handleKeyDown = (index) => {
        return (e) => {
            let nextFocusPill;
            let nextFocusEl;

            if(e.keyCode == utils.keys.right) {
                nextFocusPill = currentData[index + 1];
                setCurrentSelected(currentSelected = nextFocusPill);
            } else if (e.keyCode == utils.keys.left) {
                nextFocusPill = currentData[index - 1];
                setCurrentSelected(currentSelected = nextFocusPill);
            } else if(e.keyCode == utils.keys.backspace || e.keyCode == utils.keys.delete) {
                const newData = [...currentData];
                newData.splice(index, 1);
                setCurrentData(currentData = newData)
                nextFocusPill = currentData[index - 1];
            }
            nextFocusEl = nextFocusPill && document.getElementById(nextFocusPill.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
                setCurrentPill(currentPill = nextFocusPill)
            }
        }
    };

    const renderButtonPills = () => {
        return (
            <div className="slds-pill_container">
                <ul className="slds-listbox slds-listbox_horizontal" aria-orientation="horizontal">
                    {currentData.map((pill, i) => {
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
                    {currentData.map((pill, i) => {
                        return (
                            <li key={pill.id} className="slds-listbox-item" role="presentation">
                                <span 
                                    className="slds-pill" 
                                    role="option" 
                                    id={pill.id}
                                    tabIndex={i == 0 ? "0" : "-1"} 
                                    aria-selected={currentSelected == pill}
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

    return (
        <div>
            {pillBehavior == 'listbox' ? renderListboxPills() : renderButtonPills()}
        </div>
    )
}

export default Pills;
