import React from "react";
import Panel from './panel.js'
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
    const [panelOpen, handleSettingsClick] = useOutletContext();
    return (
        <div className="df df-spaceBetween">
            <h1>Homepage</h1>
            {panelOpen ? <Panel /> : null }
        </div>
    );
};

export default HomePage;
