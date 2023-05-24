import classNames from 'classnames';
import { useState, useRef } from 'react';
import DropdownMenu from '../dropdownMenu/dropdownMenu.js';
import utils from '../utils.js'
import Details from './content/details.js'
import Pills from '../pills/pills.js'
import DataTableExample from '../pages/templates/dataTableExample.js'
import dummyData from '../dummyData/data.js'

function Tabs({ html, overflowBtn, pillBehavior, initialFocus, linkStyle, linkColor }) {
    const tab0_ref = useRef(null);
    const tab1_ref = useRef(null);
    const tab2_ref = useRef(null);
    const tab3_ref = useRef(null);
    const tab4_ref = useRef(null);
    const tab5_ref = useRef(null);
    const tab6_ref = useRef(null);
    const overflowBtnRef = useRef(null);

    const tabData = [
        { index: 0, id: '0_tab', ref: tab0_ref, title: 'Company Details', content: <Details />},
        { index: 1, id: '1_tab', ref: tab1_ref, title: 'Admins', content: <Pills /> },
        { index: 2, id: '2_tab', ref: tab2_ref, title: 'Accounts', content: <DataTableExample data={dummyData.accounts}/> },
        { index: 3, id: '3_tab', ref: tab3_ref, title: 'Opportunities', content: <DataTableExample data={dummyData.opptys}/>} ,
        { index: 4, id: '4_tab', ref: tab4_ref, title: 'Cases', content: <DataTableExample data={dummyData.cases}/> },
        { index: 5, id: '5_tab', ref: tab5_ref, title: 'Reports', content: <DataTableExample data={dummyData.reports}/>},
        { index: 6, id: '6_tab', ref: tab6_ref, title: 'Favorites', content:  <DataTableExample data={dummyData.favorites}/>},
    ];

    let [currentTab, setCurrentTab] = useState(tabData[0]);
    let [currentData, setCurrentData] = useState(tabData);
    let [openDropdown, setOpenDropdown] = useState(false);

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
                if(overflowBtn == 'arrow') {
                    setOpenDropdown(openDropdown = true);
                }
            }
            nextFocusEl = nextFocusTab && document.getElementById(nextFocusTab.id);
            if(nextFocusEl) {
                nextFocusEl.focus()
                setCurrentTab(currentTab = nextFocusTab)
            }
        }
    };

    const handleOnClick = (index) => {
        return () => {
            setCurrentTab(currentTab = currentData[index]);
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
        setOpenDropdown(openDropdown = false);

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
                <a className="slds-tabs_default__link" 
                    href="javascript:void(0)"
                    role="tab" 
                    ref={data.ref}
                    tabIndex={currentTab.index == data.index ? "0" : "-1"} 
                    aria-selected={currentTab.index == data.index ? "true" : "false"}
                    aria-controls={`tab-default-${data.index}`}
                    onKeyDown={handleKeyDown(i)}
                    onClick={handleOnClick(i)}
                    id={data.id}>
                    {data.title}
                </a>
            </li>
        )
    })

    const renderDynamicContent = (data) => {
        if(data.id == '0_tab') {
            return <Details initialFocus={initialFocus} linkStyle={linkStyle} linkColor={linkColor} /> 
        } else if(data.id == '1_tab') {
            return <Pills pillBehavior={pillBehavior} /> 
        } else {
            return data.content
        }
    };

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
                aria-labelledby={data.id}
            >
                {renderDynamicContent(data)}
            </div>
        )
    });

    const renderHeading = () => {
        if(html == 'h2') {
            return <h2 className="slds-assistive-text">Tabs</h2>
        }
    };

    return (
        <div className="slds-tabs_default tabset bg-white mhl border-rounded pam" role={ html == 'landmark' ? 'article' : 'none' }>
            {renderHeading()}
            <ul className="slds-tabs_default__nav" role="tablist">
                {tabTitles}
                <li id="overflowBtnTab" ref={overflowBtnRef} onKeyDown={handleKeyDown(4)} tabIndex={overflowBtn == 'tab' ? '-1' : '0'} className="slds-tabs_default__item slds-tabs_default__overflow-button" role="presentation">
                    <DropdownMenu 
                        data={currentData.slice(4)} 
                        label="More"
                        handleMenuSelection={handleMenuSelection}
                        openDropdown={openDropdown}
                        overflowBtn={overflowBtn}
                        setOpenDropdown={setOpenDropdown}
                    />
                </li>
            </ul>
            {tabContent}
        </div>
    );
}

export default Tabs;
