import React, { useContext, useState, useEffect } from 'react';
import { colors } from './colors';  // Assuming colors.js is in the same directory

const SelectionColorSettings = ({ fabricCanvas }) => {
    const [selectedColors, setSelectedColors] = useState([]);

    useEffect(() => {
        // Logic to determine the colors of the selected objects on the canvas
        // and set them to the selectedColors state.
        // For simplicity, this assumes the SVG objects have a 'fill' property.
        if (fabricCanvas) {
            const activeObjects = fabricCanvas.getActiveObjects();
            const activeColors = activeObjects.map(obj => obj.fill);
            setSelectedColors([...new Set(activeColors)]); // Remove duplicates
        }
    }, [fabricCanvas]);

    const handlePredefinedColorSelect = (color) => {
        const activeObjects = fabricCanvas.getActiveObjects();
        
        activeObjects.forEach(object => {
            object.set('fill', color);
        });

        fabricCanvas.renderAll();
    };

    return (
        <div className="color-settings">
            <div className="selected-colors">
                {selectedColors.map((color, index) => (
                    <div key={index} style={{ backgroundColor: color }}></div>
                ))}
            </div>
            <div className="predefined-colors">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => handlePredefinedColorSelect(color.hex)}
                    >
                        {color.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectionColorSettings;
