import gulp from 'gulp';
import { gulpGlobs } from '../configs/index.js';

async function copyImages(cb) {
  return gulp.src(`${gulpGlobs.images}/**/*`, { encoding: false })
    .pipe(gulp.dest(gulpGlobs.publicImages))
    .on('end', cb)
    .on('error', cb);
}
export default copyImages;
