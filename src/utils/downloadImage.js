/*
 * Downloads images in browser
 */


const downloadImage = (data, extension = 'png', mimeType = 'image/png') => {
  const imageData = data.toString().replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  const byteCharacters = atob(imageData);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i += 1) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const file = new Blob([byteArray], { type: mimeType + ';base64' });
  const fileURL = window.URL.createObjectURL(file);

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file);
    return;
  }
  const link = document.createElement('a');
  link.href = fileURL;
  link.download = 'image.' + extension;
  link.dispatchEvent(new MouseEvent('click'));
  setTimeout(() => {
    // for Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(fileURL);
  }, 60);
}


const downloadSVG = (SVGmarkup) => {
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVGmarkup);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'image.svg';
  link.dispatchEvent(new MouseEvent('click'));
  setTimeout(() => {
    // for Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(url);
  }, 60);
}


export {
  downloadImage,
  downloadSVG
}