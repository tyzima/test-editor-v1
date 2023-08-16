/*
 * Demo content for FabricJS.
 */
const demoContent = (canvas, fabric) => {

  const alignObject = (pos) => {
    // ... [the complete alignObject function as you provided]
  };

  const tbox = new fabric.Textbox('Lorem ipsum dolor sit amet', {
    left: 450, top: 220, width: 130, fontSize: 20, fontFamily: "'Open Sans', sans-serif"
  });
  tbox.setSelectionStyles({ fontWeight: 'bold', fontStyle: 'italic' }, 6, 11);
  tbox.setSelectionStyles({ fontFamily: 'Impact', fill: 'red' }, 18, 21);
  tbox.setControlsVisibility({ 'mb': false });
  canvas.add(tbox);

  // Capture URL parameters
  const params = new URLSearchParams(window.location.search);

// Check if an "image" parameter exists
if (params.has('image')) {
    const imageUrl = params.get('image');
    fabric.Image.fromURL(imageUrl, function(oImg) {
        
        // Set height to 400px and adjust width to maintain aspect ratio
        const scaleFactor = 400 / oImg.height;
        oImg.scale(scaleFactor);
        
        // Adjust the position
        oImg.set({
            left: (canvas.width - oImg.width * oImg.scaleX) / 2 - 120, // Subtract 120 from the horizontal centering
            top: (canvas.height - oImg.height * oImg.scaleY) / 2
        });

        // Add the image to the canvas
        canvas.add(oImg);
        
        // Set the image as the active selection
        canvas.setActiveObject(oImg);

        // Use the alignObject function to center the image vertically
        alignObject('center-v');

    }, { crossOrigin: 'Anonymous' });
}

  // Check if an "svg" parameter exists
if (params.has('svg')) {
    const svgUrl = params.get('svg');
    fabric.loadSVGFromURL(svgUrl, function(objects) {
        const obj = fabric.util.groupSVGElements(objects);

        // Scale if necessary (similar to the image scaling logic, if needed)
        // Here, I'm just replicating the image's scaling logic for reference. 
        // If your SVG doesn't need to be 400px tall, you can adjust or remove this.
        const scaleFactor = 400 / obj.height;
        obj.scale(scaleFactor);

        // Adjust the position
        obj.set({
            left: (canvas.width - obj.width * obj.scaleX) / 2 - 120,
            top: (canvas.height - obj.height * obj.scaleY) / 2
        });

        canvas.add(obj);
        canvas.setActiveObject(obj);

        // Use the alignObject function to center the SVG vertically
        alignObject('center-v');

    });
}

}

export default demoContent
