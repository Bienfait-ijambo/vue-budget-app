import { copyFile, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the files to be copied
const filesToCopy = ['pwa-192x192.png', 'pwa-512x512.png'];

// Define the destination folder
const destinationFolder = join(__dirname, 'dist');

// Ensure the destination folder exists
if (!existsSync(destinationFolder)) {
    mkdirSync(destinationFolder, { recursive: true });
}

// Copy each file
filesToCopy.forEach(file => {
    const sourceFile = join(__dirname, file);
    const destinationFile = join(destinationFolder, file);

    // Copy the file and overwrite if it exists
    copyFile(sourceFile, destinationFile, (err) => {
        if (err) {
            console.error(`Error copying ${file}:`, err);
        } else {
            console.log(`${file} successfully copied to dist folder.`);
        }
    });
});
