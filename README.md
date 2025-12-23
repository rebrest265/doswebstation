# [ The DOS WEBSTATION ]

**DOS Webstation** is a lightweight, high-performance web terminal designed for classic DOS gaming. It serves as a specialized local interface for **DOS Wasm X**, offering a streamlined environment to host and play a personal library of MS-DOS titles directly in any modern web browser.

Originally developed for private use, this project is now shared as a prebuilt solution for retro gaming enthusiasts. It provides a "plug-and-play" bridge to the **DOS Wasm X** engine, featuring a modified UI and an automated injection system to enjoy your collection without complex local setups.

## Build and Run with Docker

1. **Build the image:** Execute the following command in the root directory:
   `docker build -t doswebstation:latest .`

2. **Run the container:** Map your local games directory to the container to load your library:
   `docker run -d -p 8080:80 -v /path/to/your/local/games:/usr/share/nginx/html/games doswebstation:latest`

3. **Access the station:** Open your browser and navigate to `http://localhost:8080`.

*Note: A prebuilt Docker image is available in the packages. You can also build your own using GitHub Actions if needed.*

## Quick Start

1. Place your `.zip` game bundles in the `/games` directory.
2. Update `games/romlist.js` with your game titles and filenames.
3. Serve the root directory using a local web server or the Docker instructions above.
4. Open the station, select a game from the list, and click **"LAUNCH GAME FROM LIST"**.

## Technology Stack

* **Engine:** [DOS Wasm X](https://github.com/nbarkhina/DosWasmX) (Emscripten / WASM)
* **Frontend:** Vanilla JS / HTML5 / CSS3 (Custom Terminal Interface)
* **Containerization:** Docker & Kubernetes

## Attribution and Licensing

* **Core Engine:** This project is an interface layer built across the **DOS Wasm X** library by [nbarkhina](https://github.com/nbarkhina/DosWasmX). It includes custom modifications to the UI, file handling, and script loading sequences. Please refer to the original repository for engine-specific licensing.
* **Game Content:** This repository **does not** contain copyrighted game data. Users are responsible for providing their own legally obtained game files.