import gulp from 'gulp';
import rename from 'gulp-rename';
import pug from 'gulp-pug';
import { gulpGlobs } from '../configs/index.js';

async function compileTemplates(cb) {
  return gulp.src(`${gulpGlobs.pages}/**/index.pug`)
    .pipe(rename((path) => {
      // eslint-disable-next-line no-param-reassign
      path.basename = path.dirname;
      // eslint-disable-next-line no-param-reassign
      path.dirname = '';
    }))
    .pipe(pug({
      basedir: gulpGlobs.src,
      verbose: true,
    }))
    .pipe(gulp.dest(gulpGlobs.dest))
    .on('end', cb)
    .on('error', cb);
}

export default compileTemplates;
