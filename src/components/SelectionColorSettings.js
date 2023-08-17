import React from 'react';

const SelectionColorSettings = (props) => {
    const { canvas } = props;

    const swatches = [
        { name: "White", color: "#ffffff" },
        { name: "Grey", color: "#a2a9ad" },
        // ... add the rest of your colors here.
    ];

  const handleColorChange = (color) => {
    if (canvas) {
        const activeObjects = canvas.getActiveObjects();  // This gets all active objects, even if it's just one.
        activeObjects.forEach(object => {
            object.set({ fill: color });
        });
        canvas.requestRenderAll();
    }
};

    return (
        <div className="svg-editor">
            <div className="edit-option">
                <div className="item-color-menu selectedOption">
                    <div className="colors">
                        <div>LOGO COLORS</div>
                        <ul id="item-color-list">
                            {swatches.map((swatch, index) => (
                                <li
                                    key={index}
                                    style={{ backgroundColor: swatch.color }}
                                    onClick={() => handleColorChange(swatch.color)}
                                >
                                    {/* Tooltip or title for color name */}
                                    <span title={swatch.name}></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="change-colors">
                        <div>CUSTOM COLOR</div>
                        <div className="color-input">
                            <input
                                id="color-input"
                                type="color"
                                onChange={(e) => handleColorChange(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionColorSettings;
