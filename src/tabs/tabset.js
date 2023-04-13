import classNames from 'classnames';
import OverflowTabMenu from './overflowTabMenu.js';

function Tabs() {
    return (
        <div className="slds-tabs_default">
            <ul className="slds-tabs_default__nav" role="tablist">
                <li className="slds-tabs_default__item slds-is-active" title="Item One" role="presentation">
                    <a className="slds-tabs_default__link" href="#" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Item One</a>
                </li>
                <li className="slds-tabs_default__item" title="Item Two" role="presentation">
                    <a className="slds-tabs_default__link" href="#" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Item Two</a>
                </li>
                <li className="slds-tabs_default__item" title="Item Three" role="presentation">
                    <a className="slds-tabs_default__link" href="#" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Item Three</a>
                </li>
                <li className="slds-tabs_default__item" title="Item Four" role="presentation">
                    <a className="slds-tabs_default__link" href="#" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-4" id="tab-default-4__item">Item Four</a>
                </li>
                <li className="slds-tabs_default__item" title="Item Five" role="presentation">
                    <a className="slds-tabs_default__link" href="#" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-5" id="tab-default-5__item">Item Five</a>
                </li>
                <li className="slds-tabs_default__item slds-tabs_default__overflow-button" title="More Tabs" role="presentation">
                    <OverflowTabMenu />
                </li>
            </ul>
            <div id="tab-default-1" className="slds-tabs_default__content slds-show" role="tabpanel" aria-labelledby="tab-default-1__item">
                <h2>Item One Content</h2>
            </div>
            <div id="tab-default-2" className="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-2__item">
                <h2>Item Two Content</h2>
            </div>
            <div id="tab-default-3" className="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-3__item">
                <h2>Item Three Content</h2>
            </div>
            <div id="tab-default-4" className="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-4__item">
                <h2>Item Four Content</h2>
            </div>
            <div id="tab-default-5" className="slds-tabs_default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-5__item">
                <h2>Item Five Content</h2>
            </div>
        </div>
    );
}

export default Tabs;
