import gulp from 'gulp';
import { gulpGlobs } from '../configs/index.js';

async function copyOtherAssets(cb) {
  return gulp.src(`${gulpGlobs.otherAssets}/**/*`)
    .pipe(gulp.dest(gulpGlobs.publicImages))
    .on('end', cb)
    .on('error', cb);
}

export default copyOtherAssets;
