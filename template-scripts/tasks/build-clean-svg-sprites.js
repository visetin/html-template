import gulp from 'gulp';
import buildSvgSprite from 'gulp-svg-sprite';
import clearSvg from 'gulp-cheerio';
import { gulpCheerio, gulpGlobs, gulpSvgSprite } from '../configs/index.js';

async function buildCleanSvgSprites(cb) {
  return gulp
    .src(`${gulpGlobs.sprites}/*.svg`)
    .pipe(clearSvg(gulpCheerio))
    .pipe(buildSvgSprite(gulpSvgSprite.typeClean))
    .pipe(gulp.dest(gulpGlobs.publicSprites))
    .on('end', cb)
    .on('error', cb);
}

export default buildCleanSvgSprites;
