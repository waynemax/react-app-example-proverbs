export default function isScreenWithEyebrow () {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const ratio = window.devicePixelRatio || 1;
  const screen = {
    width : window.screen.width,
    height : window.screen.height,
    ratioWidth : window.screen.width * ratio,
    ratioHeight : window.screen.height * ratio
  };

  let response = false;
  [{x: 828, y: 1792}, {x: 1125, y: 2436}, {x: 1242, y: 2688}].forEach(({x, y}) => {
    if (iOS) {
      if ((screen.width === x && screen.height === y) || (screen.ratioWidth === x && screen.ratioHeight === y)) {
        response = true;
      }
    }
  });

  //document.body.innerHTML = `<div style="color:white;font-size:30px;width:100%;word-wrap: break-word">${(response + '...' + iOS + ' , ' +  JSON.stringify(screen) + ' ; ratio: ' + ratio + ' UA: ' + window.navigator.userAgent)}</div>`;
  return response;
}