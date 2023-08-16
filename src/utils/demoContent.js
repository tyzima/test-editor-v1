/*
 * Demo content for FabricJS.
 */
const demoContent = (canvas, fabric) => {

  const alignObject = (pos) => {
    // ... [the complete alignObject function as you provided]
  };

  // Capture URL parameters
  const params = new URLSearchParams(window.location.search);

// Check if an "image" parameter exists
if (params.has('image')) {
    const imageUrl = params.get('image');
    fabric.Image.fromURL(imageUrl, function(oImg) {
        
        const widthScaleFactor = canvas.width / oImg.width;
        const heightScaleFactor = canvas.height / oImg.height;
        const scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);

        oImg.scale(scaleFactor);

        // Adjust the position
        oImg.set({
            left: (canvas.width - oImg.width * oImg.scaleX) / 2,
            top: (canvas.height - oImg.height * oImg.scaleY) / 2
        });

        canvas.add(oImg);
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

        const widthScaleFactor = canvas.width / obj.width;
        const heightScaleFactor = canvas.height / obj.height;
        const scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);

        obj.scale(scaleFactor);

        // Adjust the position
        obj.set({
            left: (canvas.width - obj.width * obj.scaleX) / 2,
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
