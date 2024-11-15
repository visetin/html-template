import gulp from 'gulp';
import { globs } from '../const/index.js';

export async function copyFonts(cb) {
  return gulp.src(`${globs.fonts}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicFonts))
    .on('end', cb)
    .on('error', cb);
}

export async function copyImages(cb) {
  return gulp.src(`${globs.images}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicImages))
    .on('end', cb)
    .on('error', cb);
}

export async function copySvgSpritesParts(cb) {
  return gulp.src(`${globs.sprites}/svg/**/*`, { encoding: false })
    .pipe(gulp.dest(`${globs.publicSprites}/svg/parts`))
    .on('end', cb)
    .on('error', cb);
}

export async function copyOtherAssets(cb) {
  return gulp.src(`${globs.otherAssets}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicOtherAssets))
    .on('end', cb)
    .on('error', cb);
}
