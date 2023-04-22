import Tabset from '../tabs/tabset.js'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { Button, Checkbox, RadioButtonGroup, Radio } from '@salesforce/design-system-react';

const TabsPage = () => {
    const [asideOpen, handleSettingsClick] = useOutletContext();
    let [markup, setMarkup] = useState('heading');

    const handleOnChange = () => {
        return (e) => {
            setMarkup(markup = e.target.value)
        }
    };

    const renderAside = () => {
        const markupOptions = ['heading', 'landmark'];
        const labels = { label: 'Markup for Tabset HTML' };

        return (
            <aside className="pam border-l width-25">
                <div className="df df-end">
                    <Button
                        assistiveText={{ icon: 'Close' }}
                        iconCategory="utility"
                        iconName="close"
                        iconSize="medium"
                        iconVariant="bare"
                        onClick={handleSettingsClick}
                        variant="icon"
                    />
                </div>
                <RadioButtonGroup
						labels={labels}
                        onChange={handleOnChange()}
					>
						{markupOptions.map((option) => (
							<Radio
								key={option}
								id={option}
								labels={{ label: option }}
								value={option}
								checked={markup == option}
								variant="button-group"
							/>
						))}
					</RadioButtonGroup>
            </aside>

        )
    };

    return (
        <div className="df df-spaceBetween">
            <section>
                {markup == 'heading' 
                    ? <Tabset variant="heading" />
                    : <Tabset variant="landmark" />}
            </section>
            {asideOpen ? renderAside() : null }
        </div>
    );
};

export default TabsPage;
