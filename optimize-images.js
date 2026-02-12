import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');

const processDirectory = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const outputFilePath = filePath.replace(ext, '.webp');

                // Check if main WebP exists and is up to date
                let mainWebPExists = false;
                if (fs.existsSync(outputFilePath)) {
                    const webpStat = fs.statSync(outputFilePath);
                    if (webpStat.mtime > stat.mtime) {
                        mainWebPExists = true;
                    }
                }

                if (!mainWebPExists) {
                    console.log(`Converting ${file} to WebP...`);

                    let quality = 80;
                    // Higher quality for Hero images
                    if (filePath.includes('HeroPhotos')) {
                        quality = 90;
                    }

                    sharp(filePath)
                        .webp({ quality: quality })
                        .toFile(outputFilePath)
                        .then(info => {
                            console.log(`Finished ${file}: ${info.size} bytes`);
                        })
                        .catch(err => {
                            console.error(`Error converting ${file}:`, err);
                        });
                } else {
                    console.log(`Skipping ${file} (WebP up to date)`);
                }

                // Generate Mobile Version for Hero Images
                if (filePath.includes('HeroPhotos')) {
                    const mobileOutputFilePath = outputFilePath.replace('.webp', '-mobile.webp');
                    if (!fs.existsSync(mobileOutputFilePath)) {
                        console.log(`Generating mobile version for ${file}...`);
                        sharp(filePath)
                            .resize(640) // Resize width to 640px
                            .webp({ quality: 80 })
                            .toFile(mobileOutputFilePath)
                            .then(info => {
                                console.log(`Finished ${file} (Mobile): ${info.size} bytes`);
                            })
                            .catch(err => {
                                console.error(`Error generating mobile ${file}:`, err);
                            });
                    }
                }
            }
        }
    });
};

console.log('Starting image optimization...');
processDirectory(ASSETS_DIR);
