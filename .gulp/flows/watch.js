import gulp from 'gulp';
import { globs } from '../const/index.js';

import {
  normalizeStructure,
  buildCleanSvgSprite,
  buildDefaultSvgSprite,
  compileScripts,
  compileStyles,
  compileTemplates,
  copyFonts,
  copyImages,
  copySvgSpritesParts,
  copyOtherAssets,
  runBrowserSync,
  browserSyncInstance,
} from '../tasks/index.js';

const reloadBrowser = browserSyncInstance.reload;

function runWatchers() {
  gulp.watch(
    [
      `${globs.src}/**/*.js`,
      `!${globs.src}/**/*.stories.js`,
    ],
    compileScripts,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.src}/**/*.pug`,
    ],
    compileTemplates,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.src}/**/*.scss`,
    ],
    compileStyles,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.images}/**/*`,
    ],
    copyImages,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.otherAssets}/**/*`,
    ],
    copyOtherAssets,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.sprites}/svg/**/*`,
    ],
    gulp.series(
      copySvgSpritesParts,
      gulp.parallel(
        buildCleanSvgSprite,
        buildDefaultSvgSprite,
      ),
    ),
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${globs.fonts}/**/*`,
    ],
    copyFonts,
  ).on('change', reloadBrowser);
}

export default gulp.series(
  normalizeStructure,
  gulp.parallel(
    runBrowserSync,
    runWatchers,
  ),
);
