import Controller from './controller.js';
import loadAssets from './assets.js';

document.body.appendChild(document.createElement('canvas'));

const app = new Controller();
let assetIDs = [0, 1, 20, 21, 22, 23, 24, 30, 31, 32];

// eslint-disable-next-line no-useless-escape
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) || /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    alert('For optimal performance please use chromium based browser.');
}

function run() {
    app.run();
    requestAnimationFrame(run);
}

for (let i = 0; i < assetIDs.length; i++) {
    loadAssets(assetIDs[i]);
}

new FontFace('monogram', 'url(assets/fonts/monogram.ttf)').load().then(font => {
    document.fonts.add(font);
    new FontFace('monocraft', 'url(assets/fonts/Minecrafter.Reg.ttf)').load().then(font => {
        document.fonts.add(font);
        new FontFace('emoji', 'url(assets/fonts/TwemojiMozilla.ttf)').load().then(font => {
            document.fonts.add(font);
            run();
        });
    });
});