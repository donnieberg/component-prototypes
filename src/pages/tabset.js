import { useState } from 'react';
import Tabset from '../tabs/tabset.js'

const TabsPage1 = () => {
    let [asideOpen, setAsideOpen] = useState(true);
    const renderAside = () => {
        return (
            <aside>
            </aside>
        )
    };

    return (
        <div>
            {asideOpen ? renderAside() : null }
            <Tabset variant="heading" />
            <Tabset variant="landmark" />
        </div>
    );
};

export default TabsPage1;
