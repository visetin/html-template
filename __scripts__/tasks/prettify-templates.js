import gulp from 'gulp';
import prettifyHtml from 'gulp-pretty-html';
import { gulpGlobs } from '../configs/index.js';

async function prettifyTemplates(cb) {
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve();
  }

  return gulp.src(`${gulpGlobs.dest}/*.html`)
    .pipe(prettifyHtml({
      indent_size: 4,
    }))
    .pipe(gulp.dest(gulpGlobs.dest))
    .on('end', cb)
    .on('error', cb);
}

export default prettifyTemplates;
