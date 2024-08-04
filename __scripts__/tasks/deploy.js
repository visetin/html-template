import gh from 'gh-pages';
import { gulpGlobs } from '../configs/index.js';

function deploy(cb) {
  return gh.publish(gulpGlobs.dest, {
    branch: 'build',
    message: 'build: build project',
  }, cb);
}

export default deploy;
