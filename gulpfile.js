import { build } from './__scripts__/flows/index.js';

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
} from './__scripts__/tasks/index.js';

export { watch } from './__scripts__/flows/index.js';
export default build;
