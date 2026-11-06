# hogwarts-candles

A userscript that makes any web page look like the Great Hall from Harry Potter. Floating candles pop up at the top of the page, drift up and down, and their flames flicker. Click a button in the userscript manager menu to light them, and click it again to put them out.

## What it does

- Adds a row of floating candles across the top of the page
- Candles pop in one by one with a small animation, then float gently
- Flames flicker on their own
- Candles never block your clicks, so the page works as normal
- Works on any website you open

## How to install (takes about 2 minutes)

1. Install a userscript manager. I used [Violentmonkey](https://violentmonkey.github.io/) (free, works in Chrome, Edge, Opera and Firefox).
2. **Chrome, Edge and Opera only:** right-click the Violentmonkey icon, choose **Manage extension**, and turn on **Allow user scripts**. If you skip this, the script silently does nothing.
3. Click this link to install the script: [candles.user.js](https://raw.githubusercontent.com/CodeWizard12345/hogwarts-candles/main/candles.user.js)
4. Violentmonkey will offer to install it. Click **Confirm installation**.

## How to use

1. Open any normal website, for example https://en.wikipedia.org/wiki/Harry_Potter
2. Click the **Violentmonkey icon** in your browser toolbar.
3. Under the script name, click **🕯️ Light / put out candles**.
4. The candles pop up. Click the same button again to put them out.

## Demo page

Open https://en.wikipedia.org/wiki/Harry_Potter, then follow the steps above.

## Notes

- It does not work on browser pages like `chrome://` or `opera://`, or on extension stores. Userscripts are blocked there by the browser.
- The script only adds visual elements to the page. It does not collect or send any data.

## Files

- `candles.user.js`: the whole script (plain readable JavaScript, no build step)

## Credits

Made by parthwadhwa2509 for Hack Club Forge.
