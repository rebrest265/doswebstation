# Game Repository

This folder serves as the persistent storage for the game library.

## Adding Games
1. Prepare the Bundle: Ensure the game is packed as a .jsdos (ZIP) file.
2. Configure Hardware: Internal .jsdos/dosbox.conf and SOUND.CFG should be set to Sound Blaster 16 (Base 220, IRQ 5, DMA 1) for compatibility.
3. Register: Add the game entry to manifest.json.

## manifest.json Format
```json
{
  "games": [
    { "title": "Game Name", "file": "filename.jsdos" }
  ]
}