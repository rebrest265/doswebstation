/**
 * LAUNCHER.JS - The Bridge
 * Logic to fetch games from the list and inject them into the local loader.
 */

const Launcher = {
    // 1. Download the game file
    async bootGame(isComputerStart = false) {
        const select = document.getElementById('romselect');
        const selectedOption = select.options[select.selectedIndex];
        
        // Determine URL (Default Image vs Selected Game)
        const url = isComputerStart ? myApp.data.settings.DEFAULTIMG : selectedOption.value;
        const filename = url.split('/').pop();

        if (!url) return alert("No URL found!");

        console.log(`[Launcher] Fetching: ${filename}`);
        
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            
            // Create a 'File' object just like a browser upload
            const virtualFile = new File([blob], filename, { type: blob.type });

            // 2. Inject into the existing emulator logic
            this.sendToEmulator(virtualFile);

        } catch (err) {
            console.error("[Launcher] Download failed:", err);
            alert("Failed to fetch the game file.");
        }
    },

    // 3. This part communicates with your existing script.js
    sendToEmulator(file) {
        // We simulate the exact event the 'Browse' button creates
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        const fileInput = document.getElementById('file-upload');
        fileInput.files = dataTransfer.files;

        // Trigger the 'change' event so script.js starts its work
        const event = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(event);

        // Hide the UI menu
        if (typeof myApp !== 'undefined') {
            myApp.data.beforeEmulatorStarted = false;
        }
    }
};