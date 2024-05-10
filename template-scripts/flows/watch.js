import gulp from 'gulp';
import { gulpGlobs } from '../configs/index.js';

import {
  buildCleanSvgSprites,
  buildSvgSprites,
  compileScripts,
  compileStyles,
  compileTemplates,
  copyFonts,
  copyImages,
  copySvgSprites,
  copyOtherAssets,
  runBrowserSync,
  browserSyncInstance,
} from '../tasks/index.js';

const reloadBrowser = browserSyncInstance.reload;

function runWatchers() {
  gulp.watch(
    [
      `${gulpGlobs.src}/**/*.js`,
      `!${gulpGlobs.src}/**/*.stories.js`,
    ],
    compileScripts,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${gulpGlobs.src}/**/*.pug`,
    ],
    compileTemplates,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${gulpGlobs.src}/**/*.scss`,
    ],
    compileStyles,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${gulpGlobs.images}/**/*`,
    ],
    copyImages,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${gulpGlobs.otherAssets}/**/*`,
    ],
    copyOtherAssets,
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${gulpGlobs.sprites}/**/*`,
    ],
    gulp.series(
      copySvgSprites,
      gulp.parallel(
        buildCleanSvgSprites,
        buildSvgSprites,
      ),
    ),
  ).on('change', reloadBrowser);

  gulp.watch(
    [
      `${gulpGlobs.fonts}/**/*`,
    ],
    copyFonts,
  ).on('change', reloadBrowser);
}

export default gulp.parallel(runBrowserSync, runWatchers);
