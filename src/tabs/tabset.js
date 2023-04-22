import classNames from 'classnames';
import { useState } from 'react';
import DropdownMenu from '../dropdownMenu/dropdownMenu.js';
import utils from '../utils.js'

function Tabs({ variant }) {
    const tabData = [
        { index: 0, id: '0_tab', title: 'Accounts', content: 'content for accounts' },
        { index: 1, id: '1_tab', title: 'Approvals', content: 'content for Approvals' },
        { index: 2, id: '2_tab', title: 'Leads', content: 'content for Leads' },
        { index: 3, id: '3_tab', title: 'Opportunities', content: 'content for opportunities' },
        { index: 4, id: '4_tab', title: 'Contacts', content: 'content for contacts' },
        { index: 5, id: '5_tab', title: 'Reports', content: 'content for reports' },
        { index: 6, id: '6_tab', title: 'Favorites', content: 'content for Favorites' },
    ];

    let [currentTab, setCurrentTab] = useState(tabData[0]);
    let [currentData, setCurrentData] = useState(tabData);

    const handleKeyDown = (index) => {
        return (e) => {
            let nextFocusTab;
            if(e.keyCode == utils.keys.right) {
                nextFocusTab = currentData[index + 1];
            } else if (e.keyCode == utils.keys.left) {
                nextFocusTab = currentData[index - 1];
            }
            const nextFocusEl = nextFocusTab && document.getElementById(nextFocusTab.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
                setCurrentTab(currentTab = nextFocusTab)
            }
        }
    };

    const handleMenuSelection = (item) => {
        const fromIndex = currentData.indexOf(item);
        const element = currentData[fromIndex];
        const newData = currentData.slice();
        newData.splice(fromIndex, 1);
        newData.splice(3, 0, element);
        setCurrentData(currentData = newData);
    }

    const tabTitles = currentData.slice(0, 4).map( data => {
        return (
            <li key={data.id} 
                className={classNames("slds-tabs_default__item", 
                    { 
                        'slds-is-active': currentTab.index == data.index
                    })}
                title="Item One" 
                role="presentation">
                <a className="slds-tabs_default__link" href="#" 
                    role="tab" 
                    tabIndex={currentTab.index == data.index ? "0" : "-1"} 
                    aria-selected={currentTab.index == data.index ? "true" : "false"}
                    aria-controls={`tab-default-${data.index}`}
                    onKeyDown={handleKeyDown(data.index)}
                    id={data.id}>
                    {data.title}
                </a>
            </li>
        )
    })

    const tabContent = currentData.slice(0, 4).map(data => {
        return (
            <div key={data.id} 
                id={data.id} 
                className={classNames("slds-tabs_default__content", 
                    { 
                        'slds-show': currentTab.index == data.index,
                        'slds-hide': currentTab.index != data.index, 
                    })}
                role="tabpanel" 
                aria-labelledby={data.id}>
                <h2>{data.content}</h2>
            </div>
        )
    });

    const renderHeading = () => {
        if(variant == 'heading') {
            return <h2 className="slds-assistive-text">Tabs</h2>
        }
    };

    return (
        <div className="slds-tabs_default" role={ variant == 'landmark' ? 'article' : 'none' }>
            {variant == 'heading' ? <div>heading</div> : <div>Landmark</div>}
            {renderHeading()}
            <ul className="slds-tabs_default__nav" role="tablist">
                {tabTitles}
                <li className="slds-tabs_default__item slds-tabs_default__overflow-button" role="presentation">
                    <DropdownMenu 
                        data={currentData.slice(4)} 
                        label="More"
                        handleMenuSelection={handleMenuSelection}
                        />
                </li>
            </ul>
            {tabContent}
        </div>
    );
}

export default Tabs;
