import gulp from 'gulp';
import buildSvgSprite from 'gulp-svg-sprite';
import { gulpGlobs, gulpSvgSprite } from '../configs/index.js';

async function buildSvgSprites(cb) {
  return gulp
    .src(`${gulpGlobs.sprites}/*.svg`)
    .pipe(buildSvgSprite(gulpSvgSprite.typeDefault))
    .pipe(gulp.dest(gulpGlobs.publicSprites))
    .on('end', cb)
    .on('error', cb);
}

export default buildSvgSprites;
