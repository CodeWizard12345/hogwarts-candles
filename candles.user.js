// ==UserScript==
// @name        Hogwarts Floating Candles
// @namespace   https://github.com/YOUR-USERNAME
// @version     0.1
// @description Floating candles pop up at the top of any page, like the Great Hall
// @match       *://*/*
// @noframes
// @grant       GM_registerMenuCommand
// @grant       GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle(`
    .hp-candles {
      position: fixed; top: 0; left: 0; width: 100%; height: 0;
      pointer-events: none;            /* clicks candles ke aar-paar jaate hain */
      z-index: 2147483647;
    }
    .hp-candle {
      position: absolute;
      animation: hp-float var(--float-time) ease-in-out var(--float-delay) infinite alternate;
    }
    .hp-inner {
      display: flex; flex-direction: column; align-items: center;
      animation: hp-pop 0.7s cubic-bezier(.2, 1.6, .4, 1) var(--pop-delay) backwards;
    }
    .hp-flame {
      width: 10px; height: 20px; margin-bottom: -2px;
      background: radial-gradient(ellipse at 50% 70%, #fff7b0 0%, #ffd34d 40%, #ff8a1f 75%, rgba(255,120,0,0) 100%);
      border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%;
      box-shadow: 0 0 14px 6px rgba(255,190,60,.55), 0 0 40px 14px rgba(255,150,30,.25);
      transform-origin: bottom center;
      animation: hp-flicker 0.6s ease-in-out infinite;
    }
    .hp-wax {
      width: 14px;
      background: linear-gradient(90deg, #d9cfa8, #fff8dc, #d9cfa8);
      border-radius: 2px;
      box-shadow: 0 3px 6px rgba(0,0,0,.35);
    }
    .hp-out .hp-inner { animation: hp-vanish 0.5s ease-in forwards; }

    @keyframes hp-float  { from { transform: translateY(-6px); } to { transform: translateY(8px); } }
    @keyframes hp-pop    { from { opacity: 0; transform: scale(0) translateY(-30px); } to { opacity: 1; transform: none; } }
    @keyframes hp-vanish { to   { opacity: 0; transform: scale(0) translateY(-20px); } }
    @keyframes hp-flicker {
      0%, 100% { transform: scale(1, 1) rotate(-2deg); }
      25%      { transform: scale(.9, 1.1) rotate(2deg); }
      50%      { transform: scale(1.05, .95) rotate(-1deg); }
      75%      { transform: scale(.95, 1.08) rotate(1deg); }
    }
  `);

  let container = null;

  function makeCandle(i, total) {
    const slot = 100 / total;
    const candle = document.createElement("div");
    candle.className = "hp-candle";
    candle.style.left = slot * i + Math.random() * slot * 0.6 + "%";
    candle.style.top = 10 + Math.random() * 90 + "px";
    candle.style.setProperty("--float-time", 3 + Math.random() * 3 + "s");
    candle.style.setProperty("--float-delay", -Math.random() * 3 + "s");
    candle.style.setProperty("--pop-delay", Math.random() * 1200 + "ms");

    const inner = document.createElement("div");
    inner.className = "hp-inner";

    const flame = document.createElement("div");
    flame.className = "hp-flame";
    flame.style.animationDelay = -Math.random() + "s";

    const wax = document.createElement("div");
    wax.className = "hp-wax";
    wax.style.height = 45 + Math.random() * 40 + "px";

    inner.append(flame, wax);
    candle.append(inner);
    return candle;
  }

  function light() {
    container = document.createElement("div");
    container.className = "hp-candles";
    const count = Math.max(5, Math.round(window.innerWidth / 110));
    for (let i = 0; i < count; i++) container.append(makeCandle(i, count));
    document.documentElement.append(container);
  }

  function putOut() {
    const old = container;
    container = null;
    old.classList.add("hp-out");
    setTimeout(() => old.remove(), 600);
  }

  GM_registerMenuCommand("🕯️ Light / put out candles", () => {
    container ? putOut() : light();
  });
})();