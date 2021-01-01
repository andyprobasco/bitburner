let _style;

export function addStyle(rule) {
  if (!_style) {
    _style = document.createElement("style");
    document.head.appendChild(_style);
  }

  _style.sheet.insertRule(rule);
}

export async function main(ns) {
  addStyle(`*{
        font-family: 'Operator Mono SSm Lig';
        font-size: 14px;
        font-weight: lighter;
    }`);

  addStyle(`#create-program-tab {
        height: 0;        
    }`);

  addStyle(`#character-overview-container {
        opacity: 0.2;
    }`);

  addStyle(`#terminal {
        width: 70%;
    }`);

  addStyle(`body ${vaporwave}`);
}

const grid = `{
    background-image: linear-gradient(to right, green 1px, transparent 1px), linear-gradient(to bottom, green 1px, transparent 1px);
    background-size: 40px 40px;
}`;
const vaporwave = `{
    background-image: linear-gradient(to bottom, #a7edfa 0%, #8ce6ee 25%, #f0c5df 75%, #c86d95 100%);
    background-size: auto 100vh;
    background-position: top;
    background-repeat: no-repeat;
}`;

const synthwave = `{
    background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
    background-size: auto 100vh;
    background-position: top;
    background-repeat: no-repeat;
}`;

const synthwaveSunset = `{
    background-image: linear-gradient(to bottom, #fff951 25%, #fc28a8);
    background-size: auto 100vh;
    background-position: top;
    background-repeat: no-repeat;
}`;

// styles from
// https://github.com/robb0wen/synthwave-vscode/blob/master/synthwave84.css

// "active tab neon" box-shadow: inset 0 -5px 25px #fc28a825;

/* active tab stripe
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #fc28a8, #03edf9) !important;
  opacity: 1;
  z-index: 6;
*/

/* text glow pink
  color: #f92aad;
  text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
*/
