import classNames from 'classnames';
import { useState, useRef } from 'react';
import DropdownMenu from '../dropdownMenu/dropdownMenu.js';
import utils from '../utils.js'
import Details from './content/details.js'

function Tabs({ html, overflowBtn }) {
    const tab0_ref = useRef(null);
    const tab1_ref = useRef(null);
    const tab2_ref = useRef(null);
    const tab3_ref = useRef(null);
    const tab4_ref = useRef(null);
    const tab5_ref = useRef(null);
    const tab6_ref = useRef(null);
    const overflowBtnRef = useRef(null);

    const tabData = [
        { index: 0, id: '0_tab', ref: tab0_ref, title: 'Details', content: <Details />},
        { index: 1, id: '1_tab', ref: tab1_ref, title: 'Users', content: 'content for Users' },
        { index: 2, id: '2_tab', ref: tab2_ref, title: 'Accounts', content: 'content for Accounts' },
        { index: 3, id: '3_tab', ref: tab3_ref, title: 'Opportunities', content: 'content for opportunities' },
        { index: 4, id: '4_tab', ref: tab4_ref, title: 'Cases', content: 'content for Cases' },
        { index: 5, id: '5_tab', ref: tab5_ref, title: 'Reports', content: 'content for reports' },
        { index: 6, id: '6_tab', ref: tab6_ref, title: 'Favorites', content: 'content for Favorites' },
    ];

    let [currentTab, setCurrentTab] = useState(tabData[0]);
    let [currentData, setCurrentData] = useState(tabData);

    const handleKeyDown = (index) => {
        return (e) => {
            let nextFocusTab;
            let nextFocusEl;

            if(e.keyCode == utils.keys.right) {
                if(index >= 3 && overflowBtn == 'arrow'){
                    overflowBtnRef.current.focus() 
                    nextFocusTab = { id: 'overflowBtnTab' };
                } else {
                    nextFocusTab = currentData[index + 1];
                }  
            } else if (e.keyCode == utils.keys.left) {
                nextFocusTab = currentData[index - 1];
            } else if(e.keyCode == utils.keys.down) {
                console.log('down')
            }
            nextFocusEl = nextFocusTab && document.getElementById(nextFocusTab.id);
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
        setCurrentTab(currentTab = currentData[3]);

        setTimeout(() => {
            const nextFocusEl = document.getElementById(item.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
            }
        }, 0)
    }

    const tabTitles = currentData.slice(0, 4).map((data, i) => {
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
                    ref={data.ref}
                    tabIndex={currentTab.index == data.index ? "0" : "-1"} 
                    aria-selected={currentTab.index == data.index ? "true" : "false"}
                    aria-controls={`tab-default-${data.index}`}
                    onKeyDown={handleKeyDown(i)}
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
        if(html == 'heading') {
            return <h2 className="slds-assistive-text">Tabs</h2>
        }
    };

    return (
        <div className="slds-tabs_default" role={ html == 'landmark' ? 'article' : 'none' }>
            {renderHeading()}
            <ul className="slds-tabs_default__nav" role="tablist">
                {tabTitles}
                <li id="overflowBtnTab" ref={overflowBtnRef} onKeyDown={handleKeyDown(4)} tabIndex="-1" className="slds-tabs_default__item slds-tabs_default__overflow-button" role="presentation">
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
