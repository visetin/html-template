import gulp from 'gulp';
import {
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
  normalizeStructure,
} from '../tasks/index.js';

const build = gulp.series(
  clearPublic,
  gulp.parallel(
    compileScripts,
    compileStyles,
    compileTemplates,
  ),
  gulp.parallel(
    copyImages,
    copyFonts,
    copySvgSpritesParts,
    copyOtherAssets,
    buildCleanSvgSprite,
    buildDefaultSvgSprite,
  ),
  prettifyTemplates,
);

export default build;
