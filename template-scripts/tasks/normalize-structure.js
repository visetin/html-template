import fs from 'fs';
import { gulpGlobs } from '../configs/index.js';

async function normalizeStructure() {
  if (!fs.existsSync(gulpGlobs.publicAssets)) {
    fs.mkdirSync(gulpGlobs.publicAssets);
    // eslint-disable-next-line no-console
    console.log('📁 folder created:', gulpGlobs.publicAssets);
  }
  return Promise.resolve();
}

export default normalizeStructure;
