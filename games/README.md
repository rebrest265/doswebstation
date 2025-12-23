# Game Repository

This folder serves as the persistent storage for the game library.

## Adding Games
1. Prepare the Bundle: Ensure the game is packed as a zip file.
2. Register: Add the game entry to romlist.js

## manifest.json Format
```js
var ROMLIST = [

    {url:"games/game1.zip",title:"Game1",skipiso:"true",ram:"128"},
];