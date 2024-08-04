import gulp from 'gulp';
import { gulpGlobs } from '../configs/index.js';

async function copyFonts(cb) {
  return gulp.src(`${gulpGlobs.fonts}/**/*`, { encoding: false })
    .pipe(gulp.dest(gulpGlobs.publicFonts))
    .on('end', cb)
    .on('error', cb);
}

export default copyFonts;
