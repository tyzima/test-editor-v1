import React, { useState, useEffect } from 'react';
import __ from './../utils/translation';

const SelectionColorSettings = ({ canvas, activeSelection }) => {
    const [detectedColors, setDetectedColors] = useState([]);

    // Extract distinct colors from the selected object
    const extractColors = (object) => {
        let colors = [];
        if (object.type === 'group') {
            object._objects.forEach(subObject => {
                if (subObject.fill && !colors.includes(subObject.fill)) {
                    colors.push(subObject.fill);
                }
            });
        } else {
            if (object.fill) {
                colors.push(object.fill);
            }
        }
        setDetectedColors(colors);
    };

    useEffect(() => {
        if (activeSelection) {
            extractColors(activeSelection);
        }
    }, [activeSelection]);

    const handleColorChange = (originalColor, newColor) => {
        if (activeSelection.type === 'group') {
            activeSelection._objects.forEach(subObject => {
                if (subObject.fill === originalColor) {
                    subObject.set('fill', newColor);
                }
            });
        } else {
            if (activeSelection.fill === originalColor) {
                activeSelection.set('fill', newColor);
            }
        }
        canvas.renderAll();
        canvas.trigger('object:modified');
    };

    return (
        <div className="color-settings">
            {detectedColors.map(color => (
                <div key={color} className="color-swatch">
                    <div className="color-display" style={{ backgroundColor: color }}></div>
                    <input type="color" value={color} onChange={(e) => handleColorChange(color, e.target.value)} />
                </div>
            ))}
        </div>
    );
}

export default SelectionColorSettings;
