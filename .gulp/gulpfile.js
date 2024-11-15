import { build } from './flows/index.js';

export {
  buildCleanSvgSprite,
  buildDefaultSvgSprite,
  clearPublic,
  compileScripts,
  compileStyles,
  compileTemplates,
  copyFonts,
  copyImages,
  copySvgSpritesParts,
  copyOtherAssets,
  prettifyTemplates,
  convertFonts,
  deploy,
} from './tasks/index.js';

export { watch } from './flows/index.js';
export default build;
