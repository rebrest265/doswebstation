# The DOS Webstation

DOSWebstation is a lightweight, web-based terminal for classic DOS gaming. Built on the JS-DOS v7 Legacy Engine, it provides a streamlined interface for hosting and playing a personal library of MS-DOS titles directly in any modern web browser.

Originally created for private use, this project is now shared as an all-in-one, prebuilt solution for retro gaming enthusiasts who want a "plug-and-play" way to preserve and enjoy their DOS collection without complex local emulation setups.

## Build and Run with Docker

1. **Build the image:**
   Execute the following command in the root directory:
   `docker build -t doswebstation:latest .`

2. **Run the container:**
   Map your local games directory to the container to see your files:
   `docker run -d -p 8080:80 -v /path/to/your/local/games:/usr/share/nginx/html/games doswebstation:latest`

3. **Access the station:**
   Open your browser and navigate to `http://localhost:8080`.

* Prebuilt docker image is available in releases. You can built your own with github actions if needed.

## Quick Start
1. Place .jsdos game bundles in the /games directory.
2. Update games/manifest.json with the game titles and filenames.
3. Serve the root directory using a local web server or the Docker instructions above.
4. Open index.html and select "Mount & Run".

## Technology Stack
* Engine: JS-DOS v7 (Legacy Engine)
* Frontend: Vanilla JS / HTML5 / CSS3
* Containerization: Docker & Kubernetes

## Attribution and Licensing
* JS-DOS: This project utilizes the [JS-DOS](https://js-dos.com/) library. Please refer to the JS-DOS license found in js-dos.js.
* Game Content: This repository does not contain copyrighted game data. Users are responsible for providing their own legally obtained game files.
