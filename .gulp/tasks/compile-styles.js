import * as dartSass from 'sass';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import cssimport from 'postcss-import';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import { globs } from '../const/index.js';

const sass = gulpSass(dartSass);

async function compileStyles() {
  const isProd = process.env.NODE_ENV === 'production';
  const postcssPlugins = isProd
    ? [cssimport(), autoprefixer(), cssnano()]
    : [cssimport()];

  return gulp.src(`${globs.src}/styles.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      includePaths: ['../node_modules'],
      outputStyle: isProd ? 'compressed' : 'expanded'
    }))
    .on('error', sass.logError)
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(globs.publicStyles));
}

export default compileStyles;
