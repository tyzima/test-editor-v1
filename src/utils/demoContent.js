/*
 * Demo content for FabricJS.
 */


const demoContent = (canvas, fabric) => {

  const tbox = new fabric.Textbox('Lorem ipsum dolor sit amet', {
    left: 450, top: 220, width: 130, fontSize: 20, fontFamily: "'Open Sans', sans-serif"
  })
  tbox.setSelectionStyles({ fontWeight: 'bold', fontStyle: 'italic' }, 6, 11)
  tbox.setSelectionStyles({ fontFamily: 'Impact', fill: 'red' }, 18, 21)
  tbox.setControlsVisibility({ 'mb': false })
  canvas.add(tbox)



  const rect = new fabric.Rect({
    left: 180, top: 50, width: 90, height: 50,
  });
  rect.setGradient('fill', {
    type: 'linear', x1: 0, y1: 0, x2: rect.width, y2: 0,
    colorStops: {
      0: 'red',
      1: 'orange'
    }
  });
  canvas.add(rect);



  const circle = new fabric.Circle({ left: 440, top: 300, radius: 65 });
  circle.setGradient('fill', {
    type: 'linear', x1: 0, y1: 0, x2: circle.width, y2: circle.height,
    colorStops: {
      0: '#D150FF',
      1: 'rgba(0,0,255,1)'
    }
  });
  canvas.add(circle);



  fabric.Image.fromURL('https://placekitten.com/110/150', function(oImg) {
    oImg.set({ left: 350, top: 25 })
    canvas.add(oImg);
  }, { crossOrigin: 'Anonymous' });



  const poly = new fabric.Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
    stroke: 'red',
    left: 100,
    top: 100
  });
  canvas.add(poly);



  fabric.loadSVGFromURL('test.svg', function(objects) {
    const obj = fabric.util.groupSVGElements(objects);
    obj.set({ left: 230, top: 190 });
    canvas.add(obj).renderAll();
  });



  const path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
  path.set({
    left: 120, top: 320, fill: 'rgba(0, 128, 0, 0.5)',
    stroke: '#000',
    strokeWidth: 4,
    strokeLineCap: 'square',
    strokeDashArray: [15, 15]
  });
  canvas.add(path);
}


export default demoContent
