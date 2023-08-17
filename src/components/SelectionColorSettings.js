
import React, { useState, useContext } from "react";
import { FabricContext } from "./FabricContext";
import { predefinedColors } from "./colorArray";

function SelectionColorSettings() {
    const [fabricCanvas, setFabricCanvas] = useContext(FabricContext);
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorChange = (color) => {
        setSelectedColor(color);
        if (fabricCanvas) {
            const activeObjects = fabricCanvas.getActiveObjects();
            activeObjects.forEach(obj => {
                if (obj.setFill) {
                    obj.setFill(color);
                    fabricCanvas.renderAll();
                }
            });
        }
    };

    return (
        <div className="setting">
            <div className="label">Color</div>
            <div className="function">
                <div className="predefined-colors">
                    {predefinedColors.map((colorObj) => (
                        <div
                            key={colorObj.name}
                            className="color-swatch"
                            style={{ backgroundColor: colorObj.color }}
                            onClick={() => handleColorChange(colorObj.color)}
                            title={colorObj.name}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectionColorSettings;
