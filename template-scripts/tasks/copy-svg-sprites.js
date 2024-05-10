import gulp from 'gulp';
import { gulpGlobs } from '../configs/index.js';

async function copySvgSprites(cb) {
  return gulp.src(`${gulpGlobs.sprites}/**/*`)
    .pipe(gulp.dest(gulpGlobs.publicSprites))
    .on('end', cb)
    .on('error', cb);
}

export default copySvgSprites;
