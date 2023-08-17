import React, { useState } from 'react';
import { fabric } from 'fabric';

import __ from './../utils/translation';

const SelectionColorSettings = ({ canvas, activeSelection }) => {

    const [fillColor, setFillColor] = useState('');
    const swatches = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#000000']; // Add more colors as needed

    const handleColorChange = (color) => {
        if (activeSelection.type === 'group') {
            activeSelection.getObjects().forEach(obj => {
                obj.set({ fill: color });
            });
        } else {
            activeSelection.set({ fill: color });
        }
        setFillColor(color);
        canvas.renderAll();
    };

    const handleInputChange = (e) => {
        const color = e.target.value;
        handleColorChange(color);
    };

    const ungroup = () => {
        if (activeSelection.type === 'group') {
            activeSelection.destroy();
            canvas.renderAll();
        }
    };

    return (
        <div>
            {activeSelection && (
                <div className="setting">
                    <div className="label">{__('Fill color')}</div>
                    <div className="function">
                        <input
                            type="color"
                            value={fillColor}
                            onChange={handleInputChange}
                        />
                        {swatches.map((color, index) => (
                            <div 
                                key={index}
                                className="color-swatch"
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorChange(color)}
                            ></div>
                        ))}
                    </div>
                </div>
            )}
            {activeSelection && activeSelection.type === 'group' && (
                <button onClick={ungroup}>{__('Ungroup paths')}</button>
            )}
        </div>
    );
}

export default SelectionColorSettings;
