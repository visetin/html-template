import { build } from './template-scripts/flows/index.js';

export {
  buildCleanSvgSprites,
  buildSvgSprites,
  clearPublic,
  compileScripts,
  compileStyles,
  compileTemplates,
  copyFonts,
  copyImages,
  copySvgSprites,
  copyOtherAssets,
  prettifyTemplates,
  convertFonts,
  deploy,
} from './template-scripts/tasks/index.js';

export { watch } from './template-scripts/flows/index.js';
export default build;
