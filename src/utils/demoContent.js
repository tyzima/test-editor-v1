/*
 * Demo content for FabricJS.
 */
const demoContent = (canvas, fabric) => {



  // Capture URL parameters
  const params = new URLSearchParams(window.location.search);

  // Check if an "image" parameter exists
  if (params.has('image')) {
    const imageUrl = params.get('image');
    fabric.Image.fromURL(imageUrl, function(oImg) {
        
        // Set height to 400px and adjust width to maintain aspect ratio
        const scaleFactor = 400 / oImg.height;
        oImg.scale(scaleFactor);
        
        // Set the position to the center of the canvas
        oImg.set({
            left: canvas.width / 2 - oImg.width * oImg.scaleX / 2,
            top: canvas.height / 2 - oImg.height * oImg.scaleY / 2
        });

        canvas.add(oImg);

    }, { crossOrigin: 'Anonymous' });
  }

  // Check if an "svg" parameter exists
  if (params.has('svg')) {
    const svgUrl = params.get('svg');
    fabric.loadSVGFromURL(svgUrl, function(objects) {
        const obj = fabric.util.groupSVGElements(objects);
        obj.set({ left: 230, top: 190 });
        canvas.add(obj).renderAll();
    });
  }
}

export default demoContent
