import gulp from 'gulp';
import buildSvgSprite from 'gulp-svg-sprite';
import {globs} from '../const/index.js';
import {cheerioConfig, svgSpriteConfig} from '../configs/index.js';
import clearSvg from "gulp-cheerio";

export async function buildDefaultSvgSprite(cb) {
  return gulp
    .src(`${globs.sprites}/svg/*.svg`)
    .pipe(buildSvgSprite(svgSpriteConfig.typeDefault))
    .pipe(gulp.dest(`${globs.publicSprites}/svg`))
    .on('end', cb)
    .on('error', cb);
}

export async function buildCleanSvgSprite(cb) {
  return gulp
    .src(`${globs.sprites}/svg/*.svg`)
    .pipe(clearSvg(cheerioConfig))
    .pipe(buildSvgSprite(svgSpriteConfig.typeClean))
    .pipe(gulp.dest(`${globs.publicSprites}/svg`))
    .on('end', cb)
    .on('error', cb);
}
